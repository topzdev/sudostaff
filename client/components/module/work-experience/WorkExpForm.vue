<template>
  <v-form ref="form" v-model="valid">
    <v-card flat>
      <work-exp-card :is-edit="isEdit" v-bind.sync="workExp" :rules="workExpRules" />
      <modal-form-action :is-edit="isEdit" :close-func="close" :save-func="save" />
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import ModalMixin from "@/mixins/ModalMixin";
import WorkExpFormMixin from "@/mixins/forms/WorkExpFormMixin";
export default {
  mixins: [ModalMixin, WorkExpFormMixin],

  data() {
    return {
      modalName: "workExp",
      storeName: "workExp",
      dataName: "workExp"
    };
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.loading = true;
      await this.$store.dispatch("workExp/addWorkExp", this.workExp);
      this.loading = false;
      this.close();
    }
  }
};
</script>

<style>
</style>