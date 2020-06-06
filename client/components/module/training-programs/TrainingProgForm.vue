<template>
  <v-form ref="form" v-model="valid">
    <v-card flat>
      <training-prog-card :is-edit="isEdit" v-bind.sync="trainingProg" :rules="trainingProgRules" />
      <modal-form-action :is-edit="isEdit" :close-func="close" :save-func="save" />
    </v-card>
  </v-form>
</template>

<script>
import ModalMixin from "@/mixins/ModalMixin";
import TrainingProgramMixin from "@/mixins/forms/TrainingProgramMixin";
export default {
  mixins: [ModalMixin, TrainingProgramMixin],
  data() {
    return {
      modalName: "trainingProg",
      storeName: "trainingProgram",
      dataName: "trainingProg"
    };
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.loading = true;
      await this.$store.dispatch(
        "trainingProgram/addTrainingProgram",
        this.trainingProg
      );
      this.loading = false;
      this.close();
    }
  }
};
</script>

<style>
</style>