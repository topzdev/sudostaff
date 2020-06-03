<template>
  <v-card :loading="loading">
    <v-form ref="form" v-model="valid">
      <v-card-title>Education Details</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="7">
            <v-text-field label="License Title*" v-model="civilEligibility.licenseTitle" outlined></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field label="License Number*" v-model="civilEligibility.licenseNumber" outlined></v-text-field>
          </v-col>
          <v-col cols="7">
            <v-text-field label="Rating" v-model="civilEligibility.rating" outlined></v-text-field>
          </v-col>
          <v-col cols="5">
            <date-picker label="Date Validity" v-model="civilEligibility.validityDate" />
          </v-col>
          <v-col cols="7">
            <v-text-field
              label="Examination Place"
              v-model="civilEligibility.examinationDate"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <date-picker label="Examination Date" v-model="civilEligibility.examinationDate" />
          </v-col>
        </v-row>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="showModal(false)">Close</v-btn>
        <v-btn color="Add" :loading="loading" text @click="showModal(false)">Save</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  data() {
    return {
      civilEligibility: {
        id: 1,
        employeeId: 1,
        licenseTitle: "",
        licenseNumber: "",
        rating: "",
        validityDate: "",
        examinationDate: "",
        examinationPlace: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      showModal: "modal/showCivilEligibility"
    })
  }
};
</script>

<style>
</style>