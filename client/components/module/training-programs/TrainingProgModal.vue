<template>
  <v-dialog v-model="showModal" persistent max-width="700px">
    <training-prog-form />
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    showModal() {
      return this.$store.state.modal.training;
    }
  }
};
</script>

<style>
</style>