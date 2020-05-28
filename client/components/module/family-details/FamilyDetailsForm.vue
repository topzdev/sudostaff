<template>
  <v-form>
    <family-details-card v-bind.sync="familyDetails" :header="header" :outlined="outlined" />
    <v-card flat>
      <form-card-action :is-edit="isEdit" update-text="Update Family" />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
export default {
  mixins: [FormMixin],
  data() {
    return {
      familyDetails: {
        spouseFirstName: "",
        spouseLastName: "",
        spouseMiddleName: "",
        spouseExt: "",
        fatherFirstName: "",
        fatherMiddleName: "",
        fatherLastName: "",
        fatherExt: "",
        motherFirstName: "",
        motherMiddleName: "",
        motherLastName: "",
        motherExt: ""
      }
    };
  }
};
</script>

<style>
</style>