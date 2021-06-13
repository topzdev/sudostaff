<template>
  <v-container>
    <reset-account-form />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
  head: {
    title: "Reset Account",
  },
};
</script>

<style>
</style>