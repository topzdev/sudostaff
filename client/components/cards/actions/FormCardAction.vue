<template>
  <v-card-actions>
    <v-btn color="primary" large @click="cancelFunc" text>Cancel</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="warning" v-if="isEdit" large width="200" @click="updateFunc">{{updateText}}</v-btn>
    <v-btn color="primary" v-else large width="200" @click="saveFunc">{{saveText}}</v-btn>
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

    updateText: {
      type: String,
      default: "Update"
    },

    saveFunc: {
      type: Function,
      default: () => console.log("Save Function")
    },

    cancelFunc: {
      type: Function,
      default: () => console.log("Cancel Function")
    },

    updateFunc: {
      type: Function,
      default: () => console.log("Update Function")
    }
  }
};
</script>

<style>
</style>