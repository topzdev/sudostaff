<template>
  <v-menu
    :value="show"
    :close-on-content-click="false"
    :nudge-right="40"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :value="value"
        @input="setValue"
        :label="label"
        prepend-inner-icon="mdi-calendar"
        outlined
        readonly
        v-on="on"
        :disabled="disabled"
        :required="required"
        :rules="rules"
      ></v-text-field>
    </template>
    <v-date-picker :value="value" @input="setValue"></v-date-picker>
  </v-menu>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  props: {
    label: {
      type: String,
      default: "Select Date"
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    setValue() {
      this.show = false;
      this.$emit("input", this.date);
    }
  }
};
</script>

<style>
</style>