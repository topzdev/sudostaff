<template>
  <v-dialog :value="modal.show" persistent width="450">
    <v-card>
      <v-card-title v-text="title" />
      <v-card-text>
        <div>{{message}}</div>
      </v-card-text>
      <v-card-actions>
        <template v-if="modal.isQuestion">
          <v-btn color="error" text @click="noFunction">{{noLabel}}</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="yesFunction">{{yesLabel}}</v-btn>
        </template>
        <template v-else>
          <v-spacer></v-spacer>
          <v-btn text @click="showModal(false)">{{okayLabel}}</v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import types from "@/store/types";
import { mapMutations } from "vuex";
export default {
  computed: {
    modal() {
      return this.$store.state.modal.messageDialog;
    },

    title() {
      return this.modal.title || "Message Dialog";
    },

    message() {
      return this.modal.message || "This is dialog message.";
    },

    yesLabel() {
      return this.modal.yesLabel || "Yes";
    },

    noLabel() {
      return this.modal.noLabel || "No";
    },

    okayLabel() {
      return this.modal.okayLabel || "Okay";
    }
  },

  methods: {
    ...mapMutations({
      showModal: "modal/" + types.SET_MESSAGE_MODAL
    }),
    async noFunction() {
      if (this.modal.noFunction) await this.modal.noFunction();
      this.showModal({ show: false });
    },
    async yesFunction() {
      if (this.modal.yesFunction) await this.modal.yesFunction();
      this.showModal({ show: false });
    }
  }
};
</script>

<style>
</style>