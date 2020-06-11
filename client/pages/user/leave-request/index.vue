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
        <v-alert v-if="balance" type="info">
          You currently have
          <b>{{balance}}</b> leave request balance for this year
          <b>2020</b>.
        </v-alert>
        <v-row>
          <v-col cols="4">
            <leave-request-upcoming class="mb-5" />
            <leave-request-summary />
          </v-col>
          <v-col cols="8">
            <leave-request-list />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.state.leaveRequestEmployee.summary.balance;
    }
  }
};
</script>

<style>
</style>