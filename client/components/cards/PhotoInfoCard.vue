<template>
  <v-card outlined :loading="loading" :flat="false">
    <form-card-header
      v-if="header"
      title="Employee Photo"
      description="A photo helps to identify who the employee is."
    ></form-card-header>
    <v-card-text class="d-flex justify-center align-center">
      <v-avatar size="240px">
        <base-image :loading="loading1" :src="src" alt="John" draggable="false" />
      </v-avatar>
    </v-card-text>
    <v-card-actions>
      <v-file-input
        type="file"
        prepend-icon
        prepend-inner-icon="mdi-image"
        label="Select employee photo"
        outlined
        :loading.sync="loading1"
        @change="uploadPhoto"
        :hide-details="true"
      ></v-file-input>
    </v-card-actions>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
import imageCompression from "browser-image-compression";

export default {
  mixins: [CardMixin],
  props: ["imageUrl", "raw", "url"],
  data() {
    return {
      size: 0,
      hint: "",
      loading1: false
    };
  },
  methods: {
    async uploadPhoto(image) {
      if (!image) return this.$emit("update:imageUrl", null);

      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 240,
        useWebWorker: true
      };

      try {
        this.loading1 = true;
        const compressedImage = await imageCompression(image, options);
        this.hint = "compressing image...";
        console.log(
          `from ${image.size / 1024} KB to compressed ${compressedImage.size /
            1024} KB`
        ); // smaller than maxSizeMB
        const self = this;
        const reader = new FileReader();

        reader.onload = function(e) {
          self.$emit("update:imageUrl", e.target.result);

          console.log(compressedImage);
          self.$emit("update:raw", compressedImage);
        };

        reader.readAsDataURL(compressedImage);
        this.hint = "image compressed!";
        this.loading1 = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    src() {
      return this.imageUrl || this.url;
    }
  }
};
</script>

<style>
</style>