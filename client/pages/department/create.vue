<template>
  <v-container>
    <department-form />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
};
</script>

<style >
</style>