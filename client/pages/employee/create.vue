<template>
  <v-container>
    <create-employee-form />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
  loading: false,
  head: {
    title: "Create Employee",
  },
};
</script>

<style >
</style>