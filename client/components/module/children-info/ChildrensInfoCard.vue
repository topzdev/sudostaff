<template>
  <v-card :loading="loading" flat>
    <v-card-title>Add Children</v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-1" cols="12">
          <v-text-field
            label="Children Name*"
            :value="fullName"
            @input="$emit('update:fullName', $event)"
            :rules="rules.fullName"
            :readonly="isEdit"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-1" cols="12">
          <date-picker
            label="Birth Date*"
            :value="birthDate"
            @input="$emit('update:birthDate', $event)"
            :rules="rules.birthDate"
            :readonly="isEdit"
          />
        </v-col>
      </v-row>
      <small>*indicates required field</small>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  props: ["fullName", "birthDate"],
  data() {
    return {
      test: ""
    };
  }
};
</script>

<style>
</style>