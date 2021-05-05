<template>
  <v-card
    :loading="loading"
    :disabled="loading"
    width="450"
    height="480"
    outlined
  >
    <v-form ref="form" v-model="valid">
      <h2 class="primary--text text-center mt-5 pt-4">
        <span class="red--text">Toy Storey</span>
        <span>HRIS</span>
      </h2>
      <v-card-title class="justify-center">Sign In</v-card-title>
      <v-card-subtitle class="text-center mb-5"
        >Use your employee account</v-card-subtitle
      >

      <v-card-text class="login-form pb-0">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="account.username"
              outlined
              label="Username or Employee ID"
              :rules="accountRules.username"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="account.password"
              outlined
              label="Password"
              :append-icon="passwordProps.icon"
              :type="passwordProps.type"
              :rules="accountRules.password"
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="login-form">
        <v-spacer />
        <v-btn
          color="primary"
          :loading="loading"
          block
          large
          :disabled="loading"
          elevation="0"
          @click="login"
          >Sign in</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
export default {
  mixins: [FormMixin],
  data() {
    return {
      show: false,
      account: {
        username: "emp-004",
        password: "lugod-5152000",
      },
      accountRules: {
        username: [(v) => !!v || "Username is required"],
        password: [(v) => !!v || "Password is required"],
      },
    };
  },
  computed: {
    passwordProps() {
      return {
        type: this.show ? "text" : "password",
        icon: this.show ? "mdi-eye" : "mdi-eye-off",
      };
    },
  },
  methods: {
    // async login() {
    //   const self = this;
    //   self.$refs.form.validate();
    //   if (!self.valid) return;
    //   self.loading = true;

    //   setTimeout(async () => {
    //     await self.login();
    //     self.loading = false;
    //   }, 1000);

    //   self.loading = false;
    // },

    async login() {
      this.loading = true;
      try {
        const result = await this.$auth.loginWith("local", {
          data: this.account,
        });
        console.log("loging in", result, this.$auth.loggedIn);

        if (this.$auth.loggedIn) {
          this.account = {
            username: "",
            password: "",
          };

          this.$router.push("/");
          // this.$store.dispatch("utils/setNotifDefault", result, { root: true });
        }
      } catch (error) {
        console.log(error);
        // this.$store.dispatch("utils/setNotifDefault", data, { root: true });
      }
      this.loading = false;
    },
  },
};
</script>

<style>
</style>