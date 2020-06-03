<template>
  <v-form ref="form" v-model="valid">
    <contact-info-card
      v-bind.sync="contact"
      :header="header"
      :outlined="outlined"
      :rules="contactRules"
    />
    <v-card flat>
      <form-card-action :is-edit="isEdit" update-text="Update Contact" />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import ContactFormMixin from "@/mixins/forms/ContactFormMixin";
export default {
  mixins: [FormMixin, ContactFormMixin]
};
</script>

<style>
</style>