<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn text @click="closeFunc">Close</v-btn>
    <v-btn
      color="blue darken-1"
      v-if="!isEdit"
      :loading="loading"
      text
      @click="saveFunc"
    >{{saveText}}</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },

    saveText: {
      type: String,
      default: "Save"
    },

    loading: {
      type: Boolean,
      default: false
    },

    saveFunc: {
      type: Function,
      default: () => console.log("Save Function")
    },

    closeFunc: {
      type: Function,
      default: () => console.log("Cancel Function")
    }
  }
};
</script>

<style>
</style>