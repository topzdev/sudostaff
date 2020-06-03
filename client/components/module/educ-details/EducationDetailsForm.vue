<template>
  <v-card :loading="loading">
    <v-form ref="form" v-model="valid">
      <v-card-title>Education Details</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="School Name*" v-model="educDetails.schoolName" outlined></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select label="Level" v-model="educDetails.level" outlined></v-select>
          </v-col>
          <v-col cols="8">
            <v-text-field label="Degree*" v-model="educDetails.degree" outlined></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select label="From" v-model="educDetails.from" outlined></v-select>
          </v-col>
          <v-col cols="4">
            <v-select label="To" v-model="educDetails.to" outlined></v-select>
          </v-col>
          <v-col cols="4">
            <v-select label="Year Graduated" v-model="educDetails.graduateYear" outlined></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Recognition" v-model="educDetails.recognition" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Scholarship" v-model="educDetails.scholarship" outlined></v-text-field>
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
      educDetails: {
        id: 1,
        employeeId: 1,
        level: "",
        degree: "",
        schoolName: "",
        from: "",
        to: "",
        graduateYear: 0,
        recognition: "",
        scholarship: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      showModal: "modal/showEducationDetails"
    })
  }
};
</script>

<style>
</style>