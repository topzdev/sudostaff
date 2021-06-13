<template>
  <v-container>
    <leave-submitted-form />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
};
</script>

<style>
</style>