<template>
  <v-card :loading="loading" outlined>
    <v-card-title>Summary</v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.title"
          cols="12"
          class="py-0 pt-3"
        >
          <div class="d-flex align-center">
            <div class="d-flex align-center">
              <v-icon class="mr-2">{{ item.icon }}</v-icon>
              <div class="subtitle-1">{{ item.title }}</div>
            </div>
            <v-spacer />
            <div class="title font-weight-bold text--primary">
              <b>{{ item.value }}</b>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <base-card-actions v-if="summary.balance" to="/user/leave-request/create"
      >Apply Leave Request</base-card-actions
    >
  </v-card>
</template>

<script>
export default {
  data() {
    return { loading: false };
  },
  async fetch() {
    this.loading = true;
    await this.$store.dispatch("leaveRequestEmployee/fetchSummary");
    this.loading = false;
  },

  computed: {
    summary() {
      return this.$store.state.leaveRequestEmployee.summary;
    },

    items() {
      return [
        {
          icon: "mdi-clock-outline",
          title: "Waiting for Approval",
          value: this.summary.count.pending,
        },
        {
          icon: "mdi-close-circle-outline",
          title: "Rejected",
          value: this.summary.count.rejected,
        },
        {
          icon: "mdi-check-circle-outline",
          title: "Approved",
          value: this.summary.count.approved,
        },
        {
          icon: "mdi-request",
          title: "Total Request Submitted",
          value: this.summary.count.overall,
        },
      ];
    },
  },
};
</script>

