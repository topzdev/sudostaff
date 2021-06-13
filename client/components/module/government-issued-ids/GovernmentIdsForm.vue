<template>
  <v-form ref="form" v-model="valid">
    <government-ids-card
      :is-edit="isEdit"
      v-bind.sync="governmentIds"
      :header="header"
      :rules="governmentIdsRules"
      :outlined="outlined"
    />
    <v-card flat class="background-none">
      <form-card-action
        :cancelFunc="back"
        :updateFunc="update"
        :is-edit="isEdit"
        :loading="loading"
        update-text="Update Government"
      />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import GovernmentIssuedMixin from "@/mixins/forms/GovernmentIssuedMixin";
export default {
  mixins: [FormMixin, GovernmentIssuedMixin],
  computed: {
    getInfo() {
      return this.$store.state.government.current;
    },
  },
  methods: {
    loadData() {
      if (this.getInfo)
        this.governmentIds = JSON.parse(JSON.stringify(this.getInfo));
    },
    async update() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.valid) return;

      await this.$store.dispatch(
        "government/updateGovernment",
        this.governmentIds
      );
      this.loading = false;
    },
  },
  watch: {
    getInfo() {
      this.loadData();
    },
  },
  async fetch() {
    await this.$store.dispatch("government/fetchGovernment");
    this.loadData();
  },
};
</script>

<style>
</style>