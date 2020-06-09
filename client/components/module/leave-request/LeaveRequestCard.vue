<template>
  <v-card elevation="1">
    <v-card-title class="title">
      <div>{{leaveTypeId}}</div>
      <v-spacer />
      <v-chip v-if="statuses.isApproved" color="success" class="px-5">
        <b>Approved</b>
      </v-chip>
      <v-chip v-else-if="statuses.isPending" color="warning" class="px-5">
        <b>Waiting for Approval</b>
      </v-chip>
      <v-chip v-else-if="statuses.isRejected" color="error" class="px-5">
        <b>Rejected</b>
      </v-chip>
    </v-card-title>
    <v-card-subtitle>Submitted on {{dates.createdAt}}</v-card-subtitle>
    <v-card-text>
      <div class="d-flex align-center">
        <div class="overline">Target Date: &nbsp;</div>
        <div class="font-weight-medium">
          <span class="primary--text">{{dates.startDate}}</span> to
          <span class="primary--text">{{dates.endDate}}</span> -
          <b>{{totalDaysLeave}}</b>.
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="grey lighten-5 d-flex align-end">
      <v-list-item class="px-0 pl-3" :title="department+ ' Department Head'">
        <v-list-item-avatar size="30px">
          <base-image />
        </v-list-item-avatar>

        <v-list-item-content class="py-0">
          <v-list-item-subtitle style="font-size:12px;">{{statusText}}</v-list-item-subtitle>
          <v-list-item-title style="font-size:14px;">{{departmentHead}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-spacer />
      <v-btn v-if="status.isPending" text>Cancel</v-btn>
      <v-btn v-if="status.isPending" text color="primary">Edit</v-btn>
      <v-btn v-else text color="primary">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: [
    "id",
    "employeeId",
    "startDate",
    "endDate",
    "leaveTypeId",
    "status",
    "authorizedComment",
    "departmentHead",
    "department",
    "createdAt"
  ],

  methods: {
    dayjs
  },

  computed: {
    dates() {
      return {
        startDate: dayjs(this.startDate).format("MMMM DD, YYYY (dddd)"),
        endDate: dayjs(this.endDate).format("MMMM DD, YYYY (dddd)"),
        createdAt: dayjs(this.createdAt).format("MMMM DD, YYYY h:mm:s a")
      };
    },
    totalDaysLeave() {
      const day = dayjs(this.endDate).diff(this.startDate, "day");
      return day > 1 ? `${day} Days` : `${day} Day`;
    },

    statusText() {
      let text = "";
      switch (this.status) {
        case "pending":
          text = "Waiting for response by";
          break;

        case "approved":
          text = "Approved by";
          break;

        case "rejected":
          text = "Rejected by";
          break;
      }

      return text;
    },

    statuses() {
      return {
        isApproved: this.status === "approved",
        isPending: this.status === "pending",
        isRejected: this.status === "rejected"
      };
    }
  }
};
</script>

<style>
</style>