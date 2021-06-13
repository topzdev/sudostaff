<template>
  <v-form ref="form" v-model="valid">
    <benifits-card
      :is-edit="isEdit"
      v-bind.sync="benifits"
      :header="header"
      :outlined="outlined"
    />
    <v-card flat class="background-none">
      <form-card-action
        :cancelFunc="back"
        :updateFunc="update"
        :is-edit="isEdit"
        :loading="loading"
        update-text="Update Benifits"
      />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import BenifitsFormMixin from "@/mixins/forms/BenifitsFormMixin";
export default {
  mixins: [FormMixin, BenifitsFormMixin],
  computed: {
    getInfo() {
      return this.$store.state.benifits.current;
    },
  },
  methods: {
    loadData() {
      if (this.getInfo)
        this.benifits = JSON.parse(JSON.stringify(this.getInfo));
    },
    async update() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.valid) return;

      await this.$store.dispatch("benifits/updateBenifits", this.benifits);
      this.loading = false;
    },
  },
  watch: {
    getInfo() {
      this.loadData();
    },
  },
  async fetch() {
    await this.$store.dispatch("benifits/fetchBenifits");
    this.loadData();
  },
};
</script>

<style>
</style>