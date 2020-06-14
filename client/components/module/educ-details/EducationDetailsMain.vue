<template>
  <v-card flat class="background-none">
    <v-card-text>
      <div class="d-flex mb-3">
        <div class="subtitle-2 mr-auto">Education Details</div>
        <v-btn @click="showModal(true)" color="success" text>Add Education Details</v-btn>
      </div>
      <education-details-modal />
      <education-details-table />
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
      showModal: "modal/showEducationDetails"
    })
  }
};
</script>

<style>
</style>