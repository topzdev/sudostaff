<template>
  <v-form>
    <address-details-card v-bind.sync="addressDetails" :header="header" :outlined="outlined" />
    <v-card flat>
      <form-card-action :is-edit="isEdit" update-text="Update Address" />
    </v-card>
  </v-form>
</template>


<script>
import FormMixin from "@/mixins/FormMixin";
export default {
  mixins: [FormMixin],
  data() {
    return {
      addressDetails: {
        id: 1,
        houseBlock: "",
        street: "",
        subdivision: "",
        barangay: "",
        city: "",
        province: "",
        zipcode: "",
        houseBlock2: "",
        street2: "",
        subdivision2: "",
        barangay2: "",
        city2: "",
        province2: "",
        zipcode2: ""
      }
    };
  }
};
</script>

<style>
</style>