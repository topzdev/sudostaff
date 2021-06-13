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
        <set-admin-card v-bind.sync="reset" :rules="resetRules" />
      </v-col>

      <v-col cols="8">
        <v-card flat class="background-none">
          <form-card-action
            updateText="Set as admin"
            :cancelFunc="back"
            :updateFunc="update"
            :loading="loading"
            :is-edit="true"
          />
        </v-card>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";

export default {
  mixins: [FormMixin],
  data() {
    return {
      reset: {
        employeeId: null,
      },

      resetRules: {
        employeeId: [(v) => !!v || "Employee is required"],
      },
    };
  },
  methods: {
    async update() {
      this.$refs.form.validate();
      if (!this.valid) return;

      this.loading = true;
      await this.$store.dispatch("account/resetAccount", this.reset);
      this.loading = false;
    },
  },
  computed: {
    title() {
      return "Set Administrator";
    },
    subtitle() {
      return "Set employee account to admin";
    },
  },
};
</script>

<style>
</style>