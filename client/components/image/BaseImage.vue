<template>
  <v-img contain :loading="loading" :src="checkImage" :draggable="false">
    <template v-slot:placeholder>
      <v-row class="mt-2 fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  props: {
    isPerson: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    checkImage() {
      return this.src || require("@/assets/img/no-photo.png");
    },
  },
};
</script>

<style>
</style>