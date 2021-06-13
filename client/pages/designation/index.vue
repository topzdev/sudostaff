<template>
  <v-container>
    <v-card flat class="align-center background-none">
      <v-row>
        <v-col>
          <v-card-title class="display-1 font-weight-medium"
            >Designation Management</v-card-title
          >
          <v-card-subtitle>Add and view departments</v-card-subtitle>
        </v-col>
        <v-col cols="12" md="5" class="d-flex align-center justify-center py-0">
          <v-text-field
            :loading="loading"
            placeholder="Search Designation"
            v-model="search"
            solo
          ></v-text-field>
        </v-col>
      </v-row>

      <v-card-text>
        <designation-table />
      </v-card-text>
    </v-card>
    <quick-create-button to="/designation/create" tooltip="Add Designation" />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
  data() {
    return {
      search: "",
      loading: false,
    };
  },
  watch: {
    search() {
      this.searchList();
    },
  },

  methods: {
    searchList() {
      const self = this;
      this.loading = true;

      setTimeout(() => {
        this.$store.dispatch("designation/fetchDesignations", {
          searchText: self.search,
          searchBy: "name",
        });
        self.loading = false;
      }, 1000);
    },
  },
};
</script>

<style >
</style>