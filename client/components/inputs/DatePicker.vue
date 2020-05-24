<template>
  <v-menu
    v-model="show"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        @input="setValue"
        :label="label"
        prepend-inner-icon="mdi-calendar"
        outlined
        hide-details
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" @input="setValue"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Select Date"
    }
  },
  data() {
    return {
      date: "",
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