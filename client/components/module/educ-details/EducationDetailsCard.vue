<template>
  <v-card :loading="loading" flat>
    <v-card-title>Education Details</v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="School Name*"
            :value="schoolName"
            @input="$emit('update:schoolName', $event)"
            outlined
            :rules="rules.schoolName"
            :readonly="isEdit"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <education-level-select
            label="Level"
            :value="level"
            @input="$emit('update:level', $event)"
            :rules="rules.level"
            :readonly="isEdit"
          ></education-level-select>
        </v-col>
        <v-col class="py-0 pb-1" cols="6">
          <v-text-field
            label="Degree*"
            :value="degree"
            @input="$emit('update:degree', $event)"
            outlined
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="4">
          <date-picker
            label="From"
            :value="from"
            @input="$emit('update:from', $event)"
            :rules="rules.from"
            :readonly="isEdit"
          />
        </v-col>
        <v-col class="py-0 pb-1" cols="4">
          <date-picker
            label="To"
            :value="to"
            @input="$emit('update:to', $event)"
            :rules="rules.to"
            :readonly="isEdit"
          ></date-picker>
        </v-col>
        <v-col class="py-0 pb-1" cols="4">
          <year-select
            label="Year Graduated"
            :value="graduateYear"
            @input="$emit('update:graduateYear', $event)"
            :readonly="isEdit"
          ></year-select>
        </v-col>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Recognition"
            :value="recognition"
            @input="$emit('update:recognition', $event)"
            outlined
            :readonly="isEdit"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Scholarship"
            :value="scholarship"
            @input="$emit('update:scholarship', $event)"
            outlined
            :readonly="isEdit"
          ></v-text-field>
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
    "level",
    "degree",
    "schoolName",
    "from",
    "to",
    "graduateYear",
    "recognition",
    "scholarship"
  ]
};
</script>

<style>
</style>