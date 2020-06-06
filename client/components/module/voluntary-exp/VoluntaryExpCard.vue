<template>
  <v-card :loading="loading" flat>
    <v-card-title>Voluntary Work Experience/ Voluntary Organization(s)</v-card-title>
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

        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Address*"
            :value="address"
            @input="$emit('update:address', $event)"
            :rules="rules.address"
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
          <v-text-field
            label="Total Number of Hours*"
            :value="totalHours"
            @input="$emit('update:totalHours', $event)"
            :rules="rules.totalHours"
            :readonly="isEdit"
            type="number"
            outlined
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
  props: ["company", "position", "address", "from", "to", "totalHours"]
};
</script>

<style>
</style>