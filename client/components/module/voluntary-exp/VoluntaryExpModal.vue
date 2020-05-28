<template>
  <v-dialog v-model="showModal" persistent max-width="700px">
    <voluntary-exp-form />
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    showModal() {
      return this.$store.state.modal.voluntaryExp;
    }
  }
};
</script>

<style>
</style>