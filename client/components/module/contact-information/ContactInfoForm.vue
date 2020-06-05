<template>
  <v-form ref="form" v-model="valid">
    <contact-info-card
      v-bind.sync="contact"
      :header="header"
      :outlined="outlined"
      :rules="contactRules"
    />
    <v-card flat>
      <form-card-action
        :cancelFunc="back"
        :updateFunc="update"
        :is-edit="isEdit"
        :loading="loading"
        update-text="Update Contact"
      />
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
import ContactFormMixin from "@/mixins/forms/ContactFormMixin";
export default {
  mixins: [FormMixin, ContactFormMixin],
  computed: {
    getInfo() {
      return this.$store.state.auth.contactInfo;
    }
  },
  methods: {
    loadData() {
      if (this.getInfo) this.contact = JSON.parse(JSON.stringify(this.getInfo));
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