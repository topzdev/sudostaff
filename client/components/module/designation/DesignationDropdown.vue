<template>
  <div>
    <v-autocomplete
      :value="value"
      @input="$emit('input', $event)"
      :items="list"
      item-text="name"
      item-value="id"
      hide-details
      :no-data-text="noDataTextt"
      label="Select Designation"
      outlined
      :disabled="disabled"
    >
      <template v-slot:selection="data">{{ data.item.name }}</template>
      <template v-slot:item="data">
        <v-list-item-content>
          <v-list-item-title>{{ data.item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{postFixed(data.item.department.name)}}</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-autocomplete>
    {{value}}
  </div>
</template>

<script>
export default {
  props: {
    value: String | Number,
    departmentId: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    list() {
      const rawList = this.$store.state.designation.dropdown;
      return rawList && this.departmentId
        ? rawList.filter(item => item.departmentId === this.departmentId)
        : rawList;
    },
    noDataText() {
      return !this.departmentId ? "Please select department first. " : "";
    }
  },
  methods: {
    postFixed(text) {
      return text.toLowerCase().includes("Department")
        ? text
        : text + " Department";
    }
  },
  watch: {
    departmentId() {
      this.$emit("input", null);
    }
  }
};
</script>

<style>
</style>