<template>
  <v-card-actions>
    <v-btn color="primary" large @click="cancelFunc" text>Cancel</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="warning" v-if="isEdit" large width="200" @click="updateFunc">Update</v-btn>
    <v-btn color="primary" v-else large width="200" @click="saveFunc">Save</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
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