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
        <username-card v-bind.sync="username" :rules="usernameRules" />
      </v-col>

      <v-col cols="8">
        <v-card flat class="background-none">
          <form-card-action
            updateText="Change Username"
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
import UsernameFormMixin from "@/mixins/forms/UsernameFormMixin";

export default {
  mixins: [FormMixin, UsernameFormMixin],
  methods: {
    async update() {
      this.$refs.form.validate();
      if (!this.valid) return;

      this.loading = true;
      await this.$store.dispatch("account/updateUsername", this.username);
      this.loading = false;
    },
  },
  computed: {
    title() {
      return "Change Username";
    },
    subtitle() {
      return "Manage and secure your account.";
    },
  },
};
</script>

<style>
</style>