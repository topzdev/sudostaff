<template>
  <v-date-picker
    :readonly="readonly"
    v-model="model"
    landscape
    :min="min"
    :max="max"
    :show-current="false"
    color="primary"
    header-color="primary"
    range
    full-width
  ></v-date-picker>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
import dayjs from "dayjs";
export default {
  mixins: [InputMixin],
  props: {
    value: Array,
    label: {
      type: String,
      default: "Select Date"
    },
    min: String,
    max: String,
    format: {
      type: String,
      format: "MMMM D, YYYY"
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    model: {
      set(value) {
        this.show = false;
        this.$emit("input", value);
      },
      get() {
        return this.value;
      }
    },
    dateRangeText() {
      return this.value.length ? this.value.join(" ~ ") : "";
    }
  },
  methods: {
    setValue(value) {
      this.$emit("input", value);
    },
    formatDate(date) {
      return date ? dayjs(date).format(this.format) : "";
    }
  }
};
</script>

<style>
.v-picker--landscape .v-picker__title {
  width: 40% !important;
}
.v-application--is-ltr
  .v-picker--landscape
  .v-picker__body:not(.v-picker__body--no-title),
.v-application--is-ltr
  .v-picker--landscape
  .v-picker__actions:not(.v-picker__actions--no-title) {
  margin-left: 40% !important;
}
</style>