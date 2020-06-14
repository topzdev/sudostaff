<template>
  <v-form ref="form" v-model="valid">
    <v-card :loading="loading" flat class="align-center background-none">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-col cols="8">
        <password-card v-bind.sync="password" :rules="passwordRules" />
      </v-col>

      <v-col cols="8" class="py-0">
        <v-card flat class="background-none">
          <form-card-action
            updateText="Change Password"
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
import PasswordFormMixin from "@/mixins/forms/PasswordFormMixin";

export default {
  mixins: [FormMixin, PasswordFormMixin],
  methods: {
    async update() {
      this.$refs.form.validate();
      if (!this.valid) return;

      this.loading = true;
      await this.$store.dispatch(
        "designation/updateDesignation",
        this.designation
      );
      this.loading = false;
    }
  },
  computed: {
    title() {
      return "Change Password";
    },
    subtitle() {
      return "Make secure your account by putting a strong password.";
    }
  }
};
</script>

<style>
</style>