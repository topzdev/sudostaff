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
          value: "assoc",
          text: "Associate's or technical degree complete"
        },
        {
          value: "bd",
          text: "College or baccalaureate degree complete"
        },
        {
          value: "elem",
          text: "Elementary School"
        },
        {
          value: "gd",
          text: "Graduate or professional Degree complete"
        },
        {
          value: "hs",
          text: "High School or secondary school degree complete"
        },
        {
          value: "pb",
          text: "Some post-baccalaureate education"
        },
        {
          value: "postg",
          text: "Doctoral or post graduate education"
        },
        {
          value: "scol",
          text: "Some College education"
        },
        {
          value: "sec",
          text: "Some secondary or high school education"
        },
        {
          value: "nfe",
          text: "No formal education"
        }
      ]
    };
  }
};
</script>