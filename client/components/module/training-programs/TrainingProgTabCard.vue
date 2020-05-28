<template>
  <v-card flat>
    <v-card-text>
      <div class="d-flex mb-3">
        <div class="subtitle-2 mr-auto">L & D Interventions / Training Programs Attended</div>
        <v-btn @click="showModal(true)" color="success" text>Add L&D Interventions...</v-btn>
      </div>
      <training-prog-modal />
      <training-prog-table />
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
      showModal: "modal/showTrainingProg"
    })
  }
};
</script>

<style>
</style>