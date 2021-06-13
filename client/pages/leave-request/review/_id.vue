<template>
  <div>
    <leave-admin-form />
  </div>
</template>

<script>
export default {
  middleware: ["is-admin"],
};
</script>

<style>
</style>