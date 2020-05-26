<template>
  <v-card outlined :loading="loading" :elevation="false" :flat="false">
    <form-card-header
      v-if="header"
      title="Employee Photo"
      description="A photo helps to identify who the employee is."
    ></form-card-header>
    <v-card-text class="d-flex justify-center align-center">
      <v-avatar size="240" style="border-radius: 100%">
        <img :src="photoInfo.imageUrl" alt="John" draggable="false" />
      </v-avatar>
    </v-card-text>
    <v-card-actions>
      <v-file-input
        type="file"
        prepend-icon
        prepend-inner-icon="mdi-image"
        label="Select employee photo"
        hide-details
        outlined
      ></v-file-input>
    </v-card-actions>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  data() {
    return {
      photoInfo: {
        imageId: 1,
        imageUrl: "https://cdn.vuetifyjs.com/images/john.jpg",
        rawFile: null
      }
    };
  }
};
</script>

<style>
</style>