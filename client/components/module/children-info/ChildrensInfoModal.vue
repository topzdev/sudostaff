<template>
  <v-dialog v-model="showModal" persistent max-width="400px">
    <childrens-info-form />
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    showModal() {
      return this.$store.state.modal.children;
    }
  },

  methods: {
    ...mapMutations({
      showChildren: "modal/showChildren"
    })
  }
};
</script>

<style>
</style>