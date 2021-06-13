<template>
  <v-form ref="form" v-model="valid">
    <v-card :loading="loading" flat class="align-center background-none">
      <v-row>
        <v-col>
          <v-card-title
            class="display-1 font-weight-medium"
            v-text="title"
          ></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-col cols="8">
        <v-card :outlined="outlined" :flat="true">
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <search-employee-input
                  label="Select Employee"
                  v-model="account.employeeId"
                  :rules="accountRules.employeeId"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card flat class="background-none">
          <form-card-action
            :updateText="label"
            :cancelFunc="back"
            :updateFunc="update"
            :loading="loading"
            :disabled="disabled"
            :is-edit="true"
          />
        </v-card>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import accountServices from "@/services/Account";
export default {
  mixins: [FormMixin],
  data() {
    return {
      disabled: true,
      account: {
        employeeId: null,
        isAdmin: false,
      },

      accountRules: {
        employeeId: [(v) => !!v || "Employee is required"],
      },
    };
  },
  methods: {
    async fetchEmployee() {
      this.loading = true;
      const result = await accountServices.getOne(this.account.employeeId);
      console.log("Fetch Employee", result);

      if (result.status) {
        this.account.isAdmin = result.data.isAdmin;
        this.disabled = false;
      }
      this.loading = false;
    },
    async update() {
      const result = await accountServices.setAdmin({
        employeeId: this.account.employeeId,
        isAdmin: !this.account.isAdmin,
      });

      console.log(result);

      if (result.status) {
        this.account = {
          employeeId: null,
          isAdmin: false,
        };

        this.$router.push("/account");
      }
    },
  },
  watch: {
    "account.employeeId"() {
      this.fetchEmployee();
    },
  },
  computed: {
    title() {
      return "Manage Administrator";
    },
    label() {
      return this.account.isAdmin ? "Remove as Admin" : "Set as Admin";
    },
    subtitle() {
      return "";
    },
  },
};
</script>

<style>
</style>