<template>
  <v-card outlined>
    <v-card-title class="title font-weight-regular" v-text="headerInfo.title"></v-card-title>
    <v-card-subtitle v-text="headerInfo.description"></v-card-subtitle>
    <v-tabs v-model="active" grow class="font-weight-bold">
      <v-tab v-for="(item, idx) in tabs" :key="idx">{{item.short ||item.title}}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="active">
      <v-tab-item>
        <personal-info-form :isEdit="true" :header="false" :outlined="false" />
      </v-tab-item>
      <v-tab-item>
        <contact-info-form :isEdit="true" :header="false" :outlined="false" />
      </v-tab-item>
      <v-tab-item>
        <address-details-form :isEdit="true" :header="false" :outlined="false" />
      </v-tab-item>
      <v-tab-item>
        <childrens-info-card class="mb-5 mt-5" :outlined="false" />
        <family-details-form :isEdit="true" :header="false" :outlined="false" />
      </v-tab-item>
      <v-tab-item>
        <benifits-form :isEdit="true" :header="false" :outlined="false" />
      </v-tab-item>
      <v-tab-item>
        <benifits-form :isEdit="true" :header="false" :outlined="false" />
      </v-tab-item>
      <v-tab-item>
        <government-ids-form :isEdit="true" :header="false" :outlined="false" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabs: [
        {
          title: "Personal Information",
          short: "Personal Info.",
          description:
            "Your name, Birth Date, sexual orientation and family status."
        },
        {
          title: "Contact Information",
          short: "Contact Info.",
          description:
            "Your name, Birth Date, sexual orientation and family status."
        },
        {
          title: "Address Details",
          short: "Address",
          description: "Physical and residential address."
        },
        {
          title: "Family Details",
          description: "Spouse and parents, childrens information."
        },
        {
          title: "Benifits",
          description: "Beneficiaries Information like SSS, GSIS etc."
        },
        {
          title: "Experience",
          description: "Spouse and parents, childrens information."
        },
        {
          title: "Government ID's",
          description: "License and other govermental identifications."
        },
        {
          title: "Others",
          description: "License and other govermental identifications."
        }
      ]
    };
  },
  computed: {
    headerInfo() {
      return this.tabs[this.active];
    }
  },

  watch: {
    active(value) {
      this.$router.push({ query: { tab: value } });
    }
  },
  created() {
    console.log(this.$route.query.tab);
    if (this.$route.query.tab) this.active = parseInt(this.$route.query.tab);
  }
};
</script>

<style>
</style>