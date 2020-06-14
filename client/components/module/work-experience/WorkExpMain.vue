<template>
  <v-card flat class="background-none">
    <v-card-text>
      <div class="d-flex mb-3">
        <div class="subtitle-2 mr-auto">Work Experience</div>
        <v-btn @click="showModal(true)" color="success" text>Add Work Experience</v-btn>
      </div>
      <work-exp-modal />
      <work-exp-table />
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
import { mapMutations } from "vuex";
export default {
  mixins: [CardMixin],
  methods: {
    ...mapMutations({
      showModal: "modal/showWorkExp"
    })
  }
};
</script>

<style>
</style>