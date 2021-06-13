<template>
  <v-container>
    <set-admin-form />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
};
</script>

<style>
</style>