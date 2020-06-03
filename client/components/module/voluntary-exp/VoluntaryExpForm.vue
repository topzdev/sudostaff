<template>
  <v-card :loading="loading">
    <v-form>
      <v-card-title>Voluntary Work Experience/ Voluntary Organization(s)</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="7">
            <v-text-field label="Company*" v-model="voluntaryExp.company" outlined></v-text-field>
          </v-col>

          <v-col cols="5">
            <v-text-field label="Position*" v-model="voluntaryExp.position" outlined></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-select label="From*" v-model="voluntaryExp.from" outlined></v-select>
          </v-col>
          <v-col cols="6">
            <v-select label="to*" v-model="voluntaryExp.to" outlined></v-select>
          </v-col>

          <v-col cols="6">
            <v-text-field
              label="Total Number of Hours*"
              v-model="voluntaryExp.totalHours"
              type="number"
              outlined
            ></v-text-field>
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
      voluntaryExp: {
        id: 1,
        employeeId: 1,
        company: "string",
        position: "string",
        address: "string",
        from: 2020,
        to: 2020,
        totalHours: 0
      }
    };
  },
  methods: {
    ...mapMutations({
      showModal: "modal/showVoluntaryExp"
    })
  }
};
</script>

<style>
</style>