<template>
  <v-container class="py-0">
    <v-card flat :loading="loading" class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Leave Request Management</v-card-title>
          <v-card-subtitle>Review leave request submittions</v-card-subtitle>
        </v-col>
      </v-row>

      <v-card-text>
        <leave-request-admin-rank />
        <leave-request-admin-table />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      loading: false
    };
  },
  watch: {
    search() {
      this.searchList();
    }
  },

  methods: {
    searchList() {
      const self = this;
      this.loading = true;

      setTimeout(() => {
        this.$store.dispatch("designation/fetchDesignations", {
          searchText: self.search,
          searchBy: "name"
        });
        self.loading = false;
      }, 1000);
    }
  }
};
</script>

<style >
</style>