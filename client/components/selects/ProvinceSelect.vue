<template>
  <v-select
    label="Province"
    :items="items"
    :value="value"
    item-value="value"
    item-text="text"
    @input="$emit('input', $event)"
    outlined
  >
    <template v-slot:item="data">
      <v-list-item-content>
        <v-list-item-title>{{data.item.text}}</v-list-item-title>
        <v-list-item-subtitle>{{data.item.region}}</v-list-item-subtitle>
      </v-list-item-content>
    </template>
  </v-select>
</template>
<script>
import province from "./phprovince.json";
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  data() {
    return {
      items: []
    };
  },
  async mounted() {
    this.items = province;
  }
};
</script>

<style></style>
