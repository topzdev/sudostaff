<template>
  <div>
    <leave-admin-form />
  </div>
</template>

<script>
export default {
  middleware: ["is-admin"],
  head: {
    title: "Review Leave Request",
  },
};
</script>

<style>
</style>