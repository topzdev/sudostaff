<template>
  <v-form>
    <contact-info-card v-bind.sync="employee" :header="header" :outlined="outlined" />
    <v-card flat>
      <form-card-action :is-edit="isEdit" update-text="Update Contact" />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
export default {
  mixins: [FormMixin],
  data() {
    return {
      employee: {
        id: "",
        emailAddress: "",
        mobile: "",
        landline: ""
      }
    };
  }
};
</script>

<style>
</style>