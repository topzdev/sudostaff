<template>
  <v-container>
    <manage-admin-form />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
  head: {
    title: "Manage Administrator",
  },
};
</script>

<style>
</style>