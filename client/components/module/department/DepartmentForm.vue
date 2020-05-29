<template>
  <v-form>
    <v-card flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium" v-text="title"></v-card-title>
          <v-card-subtitle v-text="subtitle"></v-card-subtitle>
        </v-col>
      </v-row>

      <v-col cols="8">
        <department-card v-bind.sync="department" :header="header" :outlined="outlined" />
      </v-col>

      <v-col cols="8" class="py-0">
        <v-card flat>
          <form-card-action />
        </v-card>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import FormMixin from "@/mixins/FormMixin";
export default {
  mixins: [FormMixin],
  data() {
    return {
      department: {
        name: "Information Technology Department",
        description: "Information Technology Department",
        headId: null
      }
    };
  },
  created() {},
  computed: {
    title() {
      return this.isEdit ? "Update Department" : "Create Department";
    },
    subtitle() {
      return this.isEdit
        ? "Edit Deparment Information"
        : "Add Deparment Information";
    }
  }
};
</script>

<style>
</style>