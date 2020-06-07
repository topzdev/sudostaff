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
        <v-alert type="info">
          You currently have
          <b>2</b> leave request balance for the month of
          <b>May 2020</b>.
        </v-alert>
        <v-row>
          <v-col cols="4">
            <leave-request-summary />
          </v-col>
          <v-col cols="8">
            <leave-request-list />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <leave-request-modal />
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>