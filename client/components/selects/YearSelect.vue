<template>
  <v-select
    :label="label"
    :items="items"
    :value="value"
    item-value="value"
    item-text="text"
    @input="$emit('input', $event)"
    outlined
    :rules="rules"
    :readonly="readonly"
  ></v-select>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  computed: {
    items() {
      let years = [];
      for (let i = new Date().getFullYear(); i >= 1900; i--) {
        years.push(i);
      }

      return years;
    }
  }
};
</script>