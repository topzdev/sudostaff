<template>
  <v-select
    label="Blood Type"
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
  data() {
    return {
      items: [
        {
          value: "a+",
          text: "A+"
        },
        { value: "a-", text: "A-" },
        {
          value: "b+",
          text: "B+"
        },
        {
          value: "b-",
          text: "B-"
        },
        {
          value: "ab+",
          text: "AB+"
        },
        {
          value: "o+",
          text: "O+"
        },
        {
          value: "o",
          text: "O"
        }
      ]
    };
  }
};
</script>

<style></style>
