<template>
  <v-container>
    <designation-form :is-edit="true" />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
};
</script>

<style >
</style>