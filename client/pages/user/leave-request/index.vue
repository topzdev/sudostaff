<template>
  <v-container class="py-0">
    <v-card flat class="align-center">
      <v-row>
        <v-col class="py-0">
          <v-card-title class="display-1 font-weight-medium">Leave Request</v-card-title>
          <v-card-subtitle>List and sumbit leave request.</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text class="py-0">
        <leave-warning war />
        <v-row>
          <v-col cols="4">
            <leave-upcoming class="mb-5" />
            <leave-summary />
          </v-col>
          <v-col cols="8">
            <leave-list />
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