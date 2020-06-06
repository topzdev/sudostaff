<template>
  <v-card :loading="loading" flat>
    <v-card-title>Work Experience</v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="7">
          <v-text-field
            label="Company*"
            :value="company"
            @input="$emit('update:company', $event)"
            :rules="rules.company"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>

        <v-col class="py-0 pb-1" cols="5">
          <v-text-field
            label="Position*"
            :value="position"
            @input="$emit('update:position', $event)"
            :rules="rules.position"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>

        <v-col class="py-0 pb-1" cols="4">
          <salary-grade-select
            label="Salary Grade*"
            :value="salaryGrade"
            @input="$emit('update:salaryGrade', $event)"
            :rules="rules.salaryGrade"
            :readonly="isEdit"
          ></salary-grade-select>
        </v-col>

        <v-col class="py-0 pb-1" cols="4">
          <salary-step-select
            label="Salary Step Incremented*"
            :value="stepIncremented"
            @input="$emit('update:stepIncremented', $event)"
            :rules="rules.stepIncremented"
            :readonly="isEdit"
          ></salary-step-select>
        </v-col>

        <v-col class="py-0 pb-1" cols="4">
          <v-text-field
            label="Monthly Salary"
            type="number"
            :value="monthlySalaray"
            @input="$emit('update:monthlySalaray', $event)"
            :rules="rules.monthlySalaray"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <year-select
            label="From*"
            :value="from"
            @input="$emit('update:from', $event)"
            :rules="rules.from"
            :readonly="isEdit"
          ></year-select>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <year-select
            label="to*"
            :value="to"
            @input="$emit('update:to', $event)"
            :rules="rules.to"
            :readonly="isEdit"
          ></year-select>
        </v-col>

        <v-col class="py-0 pb-1" cols="6">
          <v-checkbox
            :value="isFullTime"
            @input="$emit('update:isFullTime', $event)"
            label="is Full Time*"
          ></v-checkbox>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-checkbox
            :value="isGovernmentService"
            @input="$emit('update:isGovernmentService', $event)"
            label="is Government Service*"
          ></v-checkbox>
        </v-col>
      </v-row>
      <small v-if="!isEdit">*indicates required field</small>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  props: [
    "company",
    "position",
    "salaryGrade",
    "stepIncremented",
    "monthlySalaray",
    "from",
    "to",
    "isFullTime",
    "isGovernmentService"
  ]
};
</script>

<style>
</style>