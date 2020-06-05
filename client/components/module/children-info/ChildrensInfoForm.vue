<template>
  <v-form ref="form" v-model="valid">
    <v-card flat>
      <childrens-info-card
        v-bind.sync="children"
        :is-edit="isEdit"
        :loading="loading"
        :rules="childrenRules"
      ></childrens-info-card>
      <modal-form-action :is-edit="isEdit" :close-func="close" :save-func="save" />
    </v-card>
  </v-form>
</template>

<script>
import ModalMixin from "@/mixins/ModalMixin";
import ChildrenFormMixin from "@/mixins/forms/ChildrenFormMixin";
export default {
  mixins: [ModalMixin, ChildrenFormMixin],
  data() {
    return {
      modalName: "children",
      dataName: "children"
    };
  },
  methods: {
    async save() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.loading = true;
      await this.$store.dispatch("children/addChildren", this.children);
      this.loading = false;
      this.close();
    }
  }
};
</script>

<style>
</style>