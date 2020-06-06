<template>
  <v-select
    :label="label"
    :items="items"
    :value="value"
    item-value="value"
    item-text="text"
    @input="$emit('input', $event)"
    :readonly="readonly"
    outlined
    :rules="rules"
  >
    <template v-slot:item="data">
      <v-list-item-content>
        <v-list-item-title>{{data.item.text}}</v-list-item-title>
        <v-list-item-subtitle class="overline">{{data.item.description}}</v-list-item-subtitle>
      </v-list-item-content>
    </template>
  </v-select>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  data() {
    return {
      items: [
        { value: "1", text: "Step 1" },
        { value: "2", text: "Step 2" },
        { value: "3", text: "Step 3" },
        { value: "4", text: "Step 4" },
        { value: "5", text: "Step 5" },
        { value: "6", text: "Step 6" },
        { value: "7", text: "Step 7" },
        { value: "8", text: "Step 8" }
      ]
    };
  }
};
</script>

<style>
</style>