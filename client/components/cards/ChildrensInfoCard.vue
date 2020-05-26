<template>
  <v-card :outlined="outlined" flat>
    <v-card-text>
      <div class="d-flex mb-3">
        <div class="subtitle-2 mr-auto">Childrens Information</div>
        <v-btn @click="showChildren(true)" color="success" text>Add Children</v-btn>
      </div>
      <childrens-info-modal />
      <childrens-info-table />
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
      showChildren: "modal/showChildren"
    })
  }
};
</script>

<style>
</style>