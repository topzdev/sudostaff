<template>
  <v-select
    :label="label"
    :items="items"
    :value="value"
    item-value="id"
    item-text="name"
    @input="$emit('input', $event)"
    outlined
    :rules="rules"
    :dense="dense"
    :readonly="readonly"
    :hide-details="hideDetails"
  >
    <template v-slot:item="data">
      <v-list-item-content>
        <v-list-item-title>{{data.item.name}}</v-list-item-title>
        <v-list-item-subtitle>{{data.item.description}}</v-list-item-subtitle>
      </v-list-item-content>
    </template>
  </v-select>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  computed: {
    items() {
      return this.$store.state.leaveTypes.dropdown;
    }
  }
};
</script>

<style></style>
