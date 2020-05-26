<template>
  <v-form>
    <personal-info-card v-bind.sync="employee" :header="header" :outlined="outlined" />
    <v-card flat>
      <form-card-action :is-edit="isEdit" />
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
        firstName: "",
        lastName: "",
        middleName: "",
        extensionName: "",
        gender: "",
        birthDate: "",
        birthPlace: "",
        civilStatus: "",
        citizenship: "",
        bloodType: "",
        height: 0,
        weight: 0
      }
    };
  }
};
</script>

<style>
</style>