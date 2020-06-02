<template>
  <v-card outlined :loading="loading" :flat="false">
    <form-card-header
      v-if="header"
      title="Employee Photo"
      description="A photo helps to identify who the employee is."
    ></form-card-header>
    <v-card-text class="d-flex justify-center align-center">
      <v-avatar size="240px">
        <base-image :src="src" alt="John" draggable="false" />
      </v-avatar>
    </v-card-text>
    <v-card-actions>
      <v-file-input
        type="file"
        show-size
        prepend-icon
        prepend-inner-icon="mdi-image"
        label="Select employee photo"
        hide-details
        outlined
        @change="uploadPhoto"
      ></v-file-input>
    </v-card-actions>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  props: ["imageUrl", "raw", "url"],

  methods: {
    uploadPhoto(image) {
      if (!image) return this.$emit("update:imageUrl", null);
      const self = this;
      const reader = new FileReader();

      reader.onload = function(e) {
        self.$emit("update:imageUrl", e.target.result);
        self.$emit("update:raw", image);
      };

      reader.readAsDataURL(image);
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