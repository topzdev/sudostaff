<template>
  <v-card :loading="loading">
    <v-form>
      <v-card-title>Work Experience</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="7">
            <v-text-field label="Company*" v-model="workExp.company" hide-details outlined></v-text-field>
          </v-col>

          <v-col cols="5">
            <v-text-field label="Position*" v-model="workExp.position" hide-details outlined></v-text-field>
          </v-col>

          <v-col cols="4">
            <v-select label="Salary Grade*" v-model="workExp.salaryGrade" hide-details outlined></v-select>
          </v-col>

          <v-col cols="4">
            <v-select label="Step Increment" v-model="workExp.stepIncrementd" hide-details outlined></v-select>
          </v-col>

          <v-col cols="4">
            <v-text-field
              label="Monthly Salary"
              type="number"
              v-model="workExp.monthlySalaray"
              hide-details
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select label="From*" v-model="workExp.from" hide-details outlined></v-select>
          </v-col>
          <v-col cols="6">
            <v-select label="to*" v-model="workExp.to" hide-details outlined></v-select>
          </v-col>

          <v-col cols="6">
            <v-checkbox v-model="workExp.isFullTime" label="is Full Time*"></v-checkbox>
          </v-col>
          <v-col cols="6">
            <v-checkbox v-model="workExp.isGovernmentService" label="is Government Service*"></v-checkbox>
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
      workExp: {
        id: 1,
        employeeId: 1,
        company: "",
        position: "",
        salaryGrade: "",
        stepIncrementd: "",
        monthlySalaray: 0,
        from: 2020,
        to: 2020,
        isFullTime: null,
        isGovernmentService: null
      }
    };
  },
  methods: {
    ...mapMutations({
      showModal: "modal/showWorkExp"
    })
  }
};
</script>

<style>
</style>