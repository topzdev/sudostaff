<template>
  <v-container>
    <v-card flat class="align-center background-none" tile>
      <v-row>
        <v-col>
          <v-card-title class="display-1 font-weight-medium"
            >Employee Management</v-card-title
          >
          <v-card-subtitle
            >Add and view employee basic information</v-card-subtitle
          >
        </v-col>
        <v-col cols="12" md="5" class="d-flex align-center justify-center py-0">
          <v-text-field
            placeholder="Search Employee"
            solo
            v-model="search"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-card-text>
        <employee-table :search="search"></employee-table>
      </v-card-text>
    </v-card>
    <quick-create-button to="/employee/create" tooltip="Add Employee" />
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
  data() {
    return {
      search: "",
    };
  },
  head: {
    title: "Employee",
  },
};
</script>

<style >
</style>