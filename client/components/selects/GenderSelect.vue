<template>
  <v-select
    label="Gender"
    :items="items"
    :value="value"
    item-value="value"
    item-text="text"
    @input="$emit('input', $event)"
    outlined
    :rules="rules"
  ></v-select>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  data() {
    return {
      items: [
        {
          value: "m",
          text: "Male"
        },
        {
          value: "f",
          text: "Female"
        }
      ]
    };
  }
};
</script>

<style>
</style>