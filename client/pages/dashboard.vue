<template>
  <v-container class="login-container">
    <h2>Dashboard</h2>

    <v-row class="mt-2">
      <v-col cols="12">
        <dashboard-summary />
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="4">
            <recently-added-employee />
          </v-col>
          <v-col cols="4">
            <active-leave-request />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
};
</script>

