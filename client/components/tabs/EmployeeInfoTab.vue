<template>
  <v-card outlined>
    <v-card-title class="title font-weight-regular" v-text="headerInfo.title"></v-card-title>
    <v-card-subtitle v-text="headerInfo.description"></v-card-subtitle>
    <v-tabs v-model="active" grow class="font-weight-bold">
      <v-tab v-for="(item, idx) in tabs" :key="idx">{{item.title}}</v-tab>
    </v-tabs>
    <v-card-text>
      <v-tabs-items v-model="active">
        <!-- <v-tab-item v-for="item in items" :key="item">
          <v-card color="basil" flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>-->
      </v-tabs-items>
    </v-card-text>
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
          description:
            "Your name, Birth Date, sexual orientation and family status."
        },
        {
          title: "Address Details",
          description: "Physical and residential address."
        },
        {
          title: "Family Details",
          description: "Spouse and parents, childrens information."
        },
        {
          title: "Benifits",
          description: "Spouse and parents, childrens information."
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
  }
};
</script>

<style>
</style>