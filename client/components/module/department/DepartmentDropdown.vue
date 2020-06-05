<template>
  <v-autocomplete
    :value="value"
    @input="$emit('input', $event)"
    :items="list"
    item-text="name"
    item-value="id"
    :disabled="disabled"
    :required="required"
    :readonly="readonly"
    label="Select Department"
    outlined
    :rules="rules"
  >
    <template v-slot:selection="data">{{ postFixed(data.item.name) }}</template>
    <template v-slot:item="data">{{ postFixed(data.item.name) }}</template>
  </v-autocomplete>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  computed: {
    list() {
      return this.$store.state.department.dropdown;
    }
  },
  methods: {
    postFixed(text) {
      return text.toLowerCase().includes("Department")
        ? text
        : text + " Department";
    }
  }
};
</script>

<style>
</style>