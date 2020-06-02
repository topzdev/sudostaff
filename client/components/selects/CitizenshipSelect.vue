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
import nationality from "./nationalities.json";
export default {
  props: ["value"],
  data() {
    return {
      items: []
    };
  },
  async mounted() {
    this.items = nationality;
    console.log();
  }
};
</script>

<style></style>
