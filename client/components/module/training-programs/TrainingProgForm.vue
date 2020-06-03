<template>
  <v-card :loading="loading">
    <v-form ref="form" v-model="valid">
      <v-card-title>L & D Interventions / Training Programs Attended</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title*" v-model="trainingProg.company" outlined></v-text-field>
          </v-col>

          <v-col cols="6">
            <date-picker label="From*" v-model="trainingProg.from" />
          </v-col>
          <v-col cols="6">
            <date-picker label="To*" v-model="trainingProg.to" />
          </v-col>

          <v-col cols="6">
            <v-text-field
              label="Total Number of Hours"
              type="number"
              v-model="trainingProg.totalHours"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="Type" v-model="trainingProg.type" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Sponsor" v-model="trainingProg.sponsor" outlined></v-text-field>
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
import FormMxin from "@/mixins/FormMixin";
export default {
  mixins: [CardMixin, FormMxin],
  data() {
    return {
      trainingProg: {
        id: 1,
        employeeId: 1,
        title: "",
        from: "",
        to: "",
        totalHours: 0,
        type: "",
        sponsor: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      showModal: "modal/showTrainingProg"
    })
  }
};
</script>

<style>
</style>