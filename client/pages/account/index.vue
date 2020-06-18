<template>
  <v-container>
    <v-card flat class="align-center background-none" tile>
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Account Settings</v-card-title>
          <v-card-subtitle>Manage employee accounts</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text class="py-0">
        <v-row>
          <v-col cols="8">
            <reset-account />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>