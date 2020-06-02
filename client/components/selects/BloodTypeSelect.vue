<template>
  <v-select
    label="Blood Type"
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
