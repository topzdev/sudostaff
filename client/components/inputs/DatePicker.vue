<template>
  <v-menu :value="show" :close-on-content-click="true" :nudge-right="40" offset-y min-width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field
        :value="formatDate(value)"
        @input="setValue"
        :label="label"
        append-icon="mdi-calendar"
        outlined
        readonly
        v-on="on"
        :disabled="disabled"
        :required="required"
        :rules="rules"
      ></v-text-field>
    </template>

    <v-date-picker :readonly="readonly" :value="value" @input="setValue"></v-date-picker>
  </v-menu>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
import dayjs from "dayjs";
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
    setValue(value) {
      console.log(value, "DATE PICKER");
      this.show = false;
      this.$emit("input", value);
    },
    formatDate(date) {
      return date ? dayjs(date).format("MMMM D, YYYY") : "";
    }
  }
};
</script>

<style>
</style>