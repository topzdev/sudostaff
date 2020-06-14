<template>
  <v-form ref="form" v-model="valid">
    <v-card flat class="background-none">
      <education-details-card
        :is-edit="isEdit"
        v-bind.sync="educDetails"
        :rules="educDetailsRules"
      />
      <modal-form-action :is-edit="isEdit" :close-func="close" :save-func="save" />
    </v-card>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import ModalMixin from "@/mixins/ModalMixin";
import EducDetailsMixin from "@/mixins/forms/EducationDetailsFormMixin";
export default {
  mixins: [ModalMixin, EducDetailsMixin],
  data() {
    return {
      modalName: "educationDetails",
      storeName: "educDetails",
      dataName: "educDetails"
    };
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.loading = true;
      await this.$store.dispatch(
        "educDetails/addEducDetails",
        this.educDetails
      );
      this.loading = false;
      this.close();
    }
  }
};
</script>

<style>
</style>