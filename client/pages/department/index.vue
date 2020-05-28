<template>
  <v-container class="py-0">
    <v-card flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Department Management</v-card-title>
          <v-card-subtitle>Add and view departments</v-card-subtitle>
        </v-col>
        <v-col cols="12" md="5" class="d-flex align-center justify-center py-0">
          <v-text-field :hide-details="true" dense placeholder="Search Department" filled rounded></v-text-field>
        </v-col>
      </v-row>

      <v-card-text>
        <department-table />
      </v-card-text>
    </v-card>
    <v-btn color="primary" to="/department/create" fixed fab large dark bottom right>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {};
</script>

<style >
</style>