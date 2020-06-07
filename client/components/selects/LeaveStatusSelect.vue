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
    :dense="dense"
    :readonly="readonly"
    :hide-details="hideDetails"
  ></v-select>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  data() {
    return {
      items: [
        { value: "", text: "Overall" },
        {
          value: "approved",
          text: "Approved"
        },
        {
          value: "pending",
          text: "Waiting for Approval"
        },
        { value: "rejected", text: "Rejected" }
      ]
    };
  }
};
</script>

<style></style>
