<template>
  <v-container>
    <leave-submitted-form />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
  head: {
    title: "View Leave Request",
  },
};
</script>

<style>
</style>