<template>
  <img :src="checkImage" :draggable="false" />
</template>

<script>
export default {
  props: {
    isPerson: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: null
    }
  },

  computed: {
    checkImage() {
      return this.src || require("@/assets/img/no-photo.png");
    }
  }
};
</script>

<style>
</style>