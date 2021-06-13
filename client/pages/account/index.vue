<template>
  <v-container>
    <v-card flat class="align-center background-none" tile>
      <v-row>
        <v-col>
          <v-card-title class="display-1 font-weight-medium"
            >Account Settings</v-card-title
          >
          <v-card-subtitle>Manage employee accounts</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <reset-account />
          </v-col>
          <v-col cols="8">
            <manage-administrator />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware: ["is-admin"],
  head: {
    title: "Account",
  },
};
</script>

<style>
</style>