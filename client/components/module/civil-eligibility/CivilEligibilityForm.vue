<template>
  <v-form ref="form" v-model="valid">
    <v-card flat class="background-none">
      <civil-eligibility-card
        :is-edit="isEdit"
        v-bind.sync="civilEligibility"
        :rules="civilEligibilityRules"
      />
      <modal-form-action :is-edit="isEdit" :close-func="close" :save-func="save" />
    </v-card>
  </v-form>
</template>

<script>
import ModalMixin from "@/mixins/ModalMixin";
import CivilEligibilityFormMixin from "@/mixins/forms/CivilEligibilityFormMixin";
export default {
  mixins: [ModalMixin, CivilEligibilityFormMixin],
  data() {
    return {
      modalName: "civilEligibility",
      storeName: "civilEligibility",
      dataName: "civilEligibility"
    };
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.loading = true;
      await this.$store.dispatch(
        "civilEligibility/addCivilEligibility",
        this.civilEligibility
      );
      this.loading = false;
      this.close();
    }
  }
};
</script>

<style>
</style>