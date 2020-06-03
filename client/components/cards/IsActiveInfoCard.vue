<template>
  <v-card flat>
    <v-switch
      :value="isActive"
      @input="valued"
      :label="`Toggle switch to set ${ !isActive ? 'active': 'inactive'}.`"
    ></v-switch>
    <v-alert v-if="isActive" dense text type="info" class="mb-0">
      When the employee set to
      <b>inactive</b> he wont get any notification and logged in to the system.
    </v-alert>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  props: ["isActive"],

  methods: {
    valued(value) {
      console.log(value);
    }
  }
};
</script>

<style>
</style>