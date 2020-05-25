<template>
  <v-card outlined :loading="loading">
    <form-card-header
      v-if="header"
      title="Work Information"
      description="Company details of employee, assign identification and designation"
    ></form-card-header>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Employee ID" hide-details outlined></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-select label="Deparment" hide-details outlined></v-select>
        </v-col>
        <v-col cols="4">
          <v-select label="Designation" disabled hide-details outlined></v-select>
        </v-col>
        <v-col cols="4">
          <date-picker label="Joining Date" v-model="workInfo.joiningDate" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  data() {
    return {
      workInfo: {
        id: "",
        designation: "",
        designationId: 1,
        joiningDate: ""
      }
    };
  }
};
</script>

<style>
</style>