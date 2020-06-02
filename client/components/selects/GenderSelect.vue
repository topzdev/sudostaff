<template>
  <v-select
    label="Gender"
    :items="items"
    :value="value"
    item-value="value"
    item-text="text"
    @input="$emit('input', $event)"
    hide-details
    outlined
  ></v-select>
</template>

<script>
export default {
  props: ["value"],
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