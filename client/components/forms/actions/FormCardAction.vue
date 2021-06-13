<template>
  <v-card-actions>
    <v-btn color="primary" large @click="cancelFunc" text>{{
      cancelText
    }}</v-btn>
    <v-spacer></v-spacer>
    <v-btn
      color="primary"
      v-if="isEdit"
      large
      :loading="loading"
      :disabled="disabled"
      width="200"
      @click="updateFunc"
      >{{ updateText }}</v-btn
    >
    <v-btn
      color="primary"
      v-else
      large
      :disabled="disabled"
      :loading="loading"
      width="200"
      @click="saveFunc"
      >{{ saveText }}</v-btn
    >
  </v-card-actions>
</template>

<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },

    saveText: {
      type: String,
      default: "Save",
    },

    cancelText: {
      type: String,
      default: "Cancel",
    },

    updateText: {
      type: String,
      default: "Update",
    },

    loading: {
      type: Boolean,
      default: false,
    },

    saveFunc: {
      type: Function,
      default: () => console.log("Save Function"),
    },

    cancelFunc: {
      type: Function,
      default: () => console.log("Cancel Function"),
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    updateFunc: {
      type: Function,
      default: () => console.log("Update Function"),
    },
  },
};
</script>

<style>
</style>