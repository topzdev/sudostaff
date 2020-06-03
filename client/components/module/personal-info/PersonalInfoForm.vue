<template>
  <v-form ref="form" v-model="valid">
    <personal-info-card
      v-bind.sync="personal"
      :header="header"
      :outlined="outlined"
      :rules="personalRules"
    />
    <v-card flat>
      <form-card-action :is-edit="isEdit" update-text="Update Personal" />
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
  async created() {
    await this.$store.dispatch("auth/fetchPersonalInfo");
    this.personal = JSON.parse(JSON.stringify(this.getInfo));
  }
};
</script>

<style>
</style>