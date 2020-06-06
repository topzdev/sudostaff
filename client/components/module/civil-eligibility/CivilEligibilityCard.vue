<template>
  <v-card :loading="loading" flat>
    <v-card-title>Education Details</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="7">
          <v-text-field
            label="License Title*"
            :value="licenseTitle"
            @input="$emit('update:licenseTitle', $event)"
            :rules="rules.licenseTitle"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            label="License Number*"
            :value="licenseNumber"
            @input="$emit('update:licenseNumber', $event)"
            :rules="rules.licenseNumber"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="7">
          <v-text-field
            label="Rating"
            :value="rating"
            @input="$emit('update:rating', $event)"
            :rules="rules.rating"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <date-picker
            label="Date Validity"
            :value="validityDate"
            @input="$emit('update:validityDate', $event)"
            :rules="rules.validityDate"
            :readonly="isEdit"
          />
        </v-col>
        <v-col cols="7">
          <v-text-field
            label="Examination Place"
            :value="examinationPlace"
            @input="$emit('update:examinationPlace', $event)"
            :rules="rules.examinationPlace"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <date-picker
            label="Examination Date"
            :value="examinationDate"
            @input="$emit('update:examinationDate', $event)"
            :rules="rules.examinationDate"
            :readonly="isEdit"
          />
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
    "licenseTitle",
    "licenseNumber",
    "rating",
    "validityDate",
    "examinationDate",
    "examinationPlace"
  ]
};
</script>

<style>
</style>