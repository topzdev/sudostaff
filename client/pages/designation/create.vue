<template>
  <auto-layout>
    <v-container>
      <designation-form />
    </v-container>
  </auto-layout>
</template>

<script>
export default {
  middleware: ["is-admin"],
};
</script>

<style >
</style>