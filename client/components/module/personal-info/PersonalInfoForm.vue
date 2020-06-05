<template>
  <v-form ref="form" v-model="valid">
    <personal-info-card
      v-bind.sync="personal"
      :header="header"
      :outlined="outlined"
      :rules="personalRules"
    />
    <v-card flat>
      <form-card-action
        :cancelFunc="back"
        :updateFunc="update"
        :is-edit="isEdit"
        :loading="loading"
        update-text="Update Personal"
      />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import PersonalFormMixin from "@/mixins/forms/PersonalFormMixin";
export default {
  mixins: [FormMixin, PersonalFormMixin],
  computed: {
    getInfo() {
      return this.$store.state.auth.personalInfo;
    }
  },
  methods: {
    loadData() {
      if (this.getInfo)
        this.personal = JSON.parse(JSON.stringify(this.getInfo));
    },
    async update() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.valid) return;

      await this.$store.dispatch("auth/updatePersonalInfo", this.personal);
      this.loading = false;
    }
  },
  watch: {
    getInfo() {
      this.loadData();
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>