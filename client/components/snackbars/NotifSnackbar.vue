<template>
  <v-snackbar
    :value="notifSnackbar"
    :timeout="snackbarOption.timeout"
    :color="snackbarOption.color"
  >
    {{ message }}
    <v-btn dark text @click="showSnackbar(false)">Close</v-btn>
  </v-snackbar>
</template>

<script>
import types from "@/store/types";
import { mapMutations } from "vuex";
export default {
  computed: {
    notifSnackbar: {
      set(show) {
        this.showSnackbar(show);
      },

      get() {
        return this.snackbarOption.show;
      }
    },
    snackbarOption() {
      return this.$store.state.frontend.notifSnackbar;
    },

    message() {
      return this.snackbarOption.message || "Notification Message here.";
    }
  },

  methods: {
    ...mapMutations({
      showSnackbar: "frontend/" + types.SET_NOTIF_SNACKBAR
    })
  }
};
</script>

<style>
</style>