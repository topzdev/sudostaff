<template>
  <div>
    <v-card-title class="title font-weight-regular" v-text="title" />
    <v-card-subtitle v-if="description" v-text="description" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Your title here."
    },
    description: String
  }
};
</script>

<style>
</style>