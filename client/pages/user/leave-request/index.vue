<template>
  <v-container>
    <v-card flat class="align-center background-none" tile>
      <v-row>
        <v-col>
          <v-card-title class="display-1 font-weight-medium"
            >Leave Request</v-card-title
          >
          <v-card-subtitle>List and sumbit leave request.</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text>
        <leave-warning />
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
export default {
  head: {
    title: "My Leave Request",
  },
};
</script>

<style>
</style>