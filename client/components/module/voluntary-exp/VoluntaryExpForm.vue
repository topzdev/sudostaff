<template>
  <v-form ref="form" v-model="valid">
    <v-card flat>
      <voluntary-exp-card :is-edit="isEdit" v-bind.sync="voluntaryExp" :rules="voluntaryExpRules"></voluntary-exp-card>
      <modal-form-action :is-edit="isEdit" :close-func="close" :save-func="save" />
    </v-card>
  </v-form>
</template>

<script>
import ModalMixin from "@/mixins/ModalMixin";
import VoluntaryExpMixin from "@/mixins/forms/VoluntaryExpMixin";
export default {
  mixins: [ModalMixin, VoluntaryExpMixin],
  data() {
    return {
      modalName: "voluntaryExp",
      storeName: "voluntaryOrg",
      dataName: "voluntaryExp"
    };
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.loading = true;
      await this.$store.dispatch(
        "voluntaryOrg/addVoluntaryOrg",
        this.voluntaryExp
      );
      this.loading = false;
      this.close();
    }
  }
};
</script>

<style>
</style>