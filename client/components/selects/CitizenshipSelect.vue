<template>
  <v-select
    label="Citezenship"
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
import nationality from "./nationalities.json";
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
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
