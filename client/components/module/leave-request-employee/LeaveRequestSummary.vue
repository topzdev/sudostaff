<template>
  <v-card :loading="loading" outlined>
    <v-card-title>Summary</v-card-title>
    <v-card-text>
      <div class="d-flex align-center">
        <div class="subtitle-1">Waiting for Approval:</div>
        <div class="title font-weight-bold ml-3">
          <b>{{summary.count.pending}}</b>
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="subtitle-1">Rejected:</div>
        <div class="title font-weight-bold ml-3">
          <b>{{summary.count.rejected}}</b>
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="subtitle-1">Approved:</div>
        <div class="title font-weight-bold ml-3">
          <b>{{summary.count.approved}}</b>
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="subtitle-1">Total Leave Submitted:</div>
        <div class="title font-weight-bold ml-3">
          <b>{{summary.count.overall}}</b>
        </div>
      </div>
      <template v-if="summary.balance">
        <v-divider class="my-5"></v-divider>
        <v-btn class="mt-5" large block color="primary" to="/user/leave-request/create">Apply Leave</v-btn>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return { loading: false };
  },
  async mounted() {
    this.loading = true;
    await this.$store.dispatch("leaveRequestEmployee/fetchSummary");
    this.loading = false;
  },

  computed: {
    summary() {
      return this.$store.state.leaveRequestEmployee.summary;
    }
  }
};
</script>

<style>
</style>