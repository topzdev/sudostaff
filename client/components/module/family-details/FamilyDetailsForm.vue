<template>
  <v-form ref="form" v-model="valid">
    <family-details-card v-bind.sync="familyDetails" :header="header" :outlined="outlined" />
    <v-card flat>
      <form-card-action
        :cancelFunc="back"
        :updateFunc="update"
        :is-edit="isEdit"
        :loading="loading"
        update-text="Update Family"
      />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import FamilyDetailsFormMixin from "@/mixins/forms/FamilyDetailsFormMixin";
export default {
  mixins: [FormMixin, FamilyDetailsFormMixin],
  computed: {
    getInfo() {
      return this.$store.state.familyDetails.current;
    }
  },
  methods: {
    loadData() {
      if (this.getInfo)
        this.familyDetails = JSON.parse(JSON.stringify(this.getInfo));
    },
    async update() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.valid) return;

      await this.$store.dispatch(
        "familyDetails/updateFamilyDetails",
        this.familyDetails
      );
      this.loading = false;
    }
  },
  watch: {
    getInfo() {
      this.loadData();
    }
  },
  async mounted() {
    await this.$store.dispatch("familyDetails/fetchFamilyDetails");
    this.loadData();
  }
};
</script>

<style>
</style>