<template>
  <v-container class="py-0">
    <v-btn color="primary" @click="fetchOne">Hello</v-btn>
    <create-employee-form />
  </v-container>
</template>

<script>
import store from "@/store";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      fetchOne: "department/fetchOneDepartment"
    })
  }
};
</script>

<style >
</style>