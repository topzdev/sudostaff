<template>
  <v-form>
    <government-ids-card v-bind.sync="governmentIds" :header="header" :outlined="outlined" />
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
      governmentIds: {
        id: 1,
        governmentIssueId: "string",
        idLicensePassportId: "string",
        dateIssuance: "2020-05-26",
        placeIssuance: "string"
      }
    };
  }
};
</script>

<style>
</style>