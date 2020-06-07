<template>
  <v-card outlined>
    <v-card-title>Summary</v-card-title>
    <v-card-text>
      <div class="d-flex align-center">
        <div class="subtitle-1">Waiting for Approval:</div>
        <div class="title font-weight-bold ml-3">
          <b>1</b>
        </div>
        <v-spacer></v-spacer>
        <v-btn text>View</v-btn>
      </div>
      <div class="d-flex align-center">
        <div class="subtitle-1">Rejected:</div>
        <div class="title font-weight-bold ml-3">
          <b>5</b>
        </div>
        <v-spacer></v-spacer>
        <v-btn text>View</v-btn>
      </div>
      <div class="d-flex align-center">
        <div class="subtitle-1">Approved:</div>
        <div class="title font-weight-bold ml-3">
          <b>10</b>
        </div>
        <v-spacer></v-spacer>
        <v-btn text>View</v-btn>
      </div>
      <v-divider class="my-5"></v-divider>
      <v-btn class="mt-5" large block color="primary">Apply Leave</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>