<template>
  <v-card :loading="loading" outlined>
    <v-card-title>Summary</v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="item in items" :key="item.title" cols="12" class="py-0 pt-3">
          <div class="d-flex align-center">
            <div class="d-flex align-center">
              <v-icon class="mr-2">{{item.icon}}</v-icon>
              <div class="subtitle-1">{{item.title}}:</div>
            </div>
            <v-spacer />
            <div class="title font-weight-bold text--primary">
              <b>{{item.value}}</b>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions v-if="summary.balance" class="card-actions-btn">
      <v-btn
        text
        large
        block
        tile
        color="primary"
        to="/user/leave-request/create"
      >Apply Leave Request</v-btn>
    </v-card-actions>
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
    },

    items() {
      return [
        {
          icon: "mdi-clock-outline",
          title: "Waiting for Approval",
          value: this.summary.count.pending
        },
        {
          icon: "mdi-close-circle-outline",
          title: "Rejected",
          value: this.summary.count.rejected
        },
        {
          icon: "mdi-check-circle-outline",
          title: "Approved",
          value: this.summary.count.approved
        },
        {
          icon: "mdi-request",
          title: "Total Request Submitted",
          value: this.summary.count.overall
        }
      ];
    }
  }
};
</script>

<style>
.card-actions-btn {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0 !important;
  overflow: hidden;
}

.card-actions-btn .v-btn {
  font-weight: 600 !important;
  padding: 10px 20px !important;
  height: 60px !important;
}
</style>