<template>
  <v-select
    label="Civil Status"
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
          value: "d",
          text: "Divorced",
          description: "Once married but now legally divorced"
        },
        { value: "m", text: "Married", description: "Legally married" },
        {
          value: "x",
          text: "Separated",
          description: "Legally married but living apart"
        },
        {
          value: "s",
          text: "Single",
          description: "Never legally married"
        },
        {
          value: "w",
          text: "Widowed",
          description: "Legally married and spouse is deceased"
        },
        {
          value: "n",
          text: "Not known",
          description: "Information not available"
        },
        {
          value: "l",
          text: "Life Time Partner",
          description: "Not legally married"
        }
      ]
    };
  }
};
</script>

<style>
</style>