<template>
  <v-form ref="form" v-model="valid">
    <address-details-card
      :is-edit="isEdit"
      v-bind.sync="addressDetails"
      :header="header"
      :outlined="outlined"
    />
    <v-card flat>
      <form-card-action
        :cancelFunc="back"
        :updateFunc="update"
        :is-edit="isEdit"
        :loading="loading"
        update-text="Update Address"
      />
    </v-card>
  </v-form>
</template>


<script>
import FormMixin from "@/mixins/FormMixin";
import AddressFormMixin from "@/mixins/forms/AddressFormMixin";
export default {
  mixins: [FormMixin, AddressFormMixin],
  computed: {
    getInfo() {
      return this.$store.state.personal.address;
    }
  },
  methods: {
    loadData() {
      if (this.getInfo)
        this.addressDetails = JSON.parse(JSON.stringify(this.getInfo));
    },
    async update() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.valid) return;

      await this.$store.dispatch(
        "personal/updateAddressDetails",
        this.addressDetails
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
    await this.$store.dispatch("personal/fetchAddressDetails");
    this.loadData();
  }
};
</script>

<style>
</style>