<template>
  <v-card flat class="background-none">
    <v-card-text>
      <div class="d-flex mb-3">
        <div class="subtitle-2 mr-auto">Voluntary Work Experience/ Voluntary Organization(s)</div>
        <v-btn @click="showModal(true)" color="success" text>Add Voluntary Info.</v-btn>
      </div>
      <voluntary-exp-modal />
      <voluntary-exp-table />
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
      showModal: "modal/showVoluntaryExp"
    })
  }
};
</script>

<style>
</style>