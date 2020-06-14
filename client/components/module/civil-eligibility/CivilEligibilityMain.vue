<template>
  <v-card flat class="background-none">
    <v-card-text>
      <div class="d-flex mb-3">
        <div class="subtitle-2 mr-auto">Civil Eligibility</div>
        <v-btn @click="showModal(true)" color="success" text>Add Civil Eligibility</v-btn>
      </div>
      <civil-eligibility-modal />
      <civil-eligibility-table />
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
      showModal: "modal/showCivilEligibility"
    })
  }
};
</script>

<style>
</style>