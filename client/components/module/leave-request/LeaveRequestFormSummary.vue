<template>
  <v-card outlined>
    <v-card-title>Leave Request Summary</v-card-title>
    <v-card-subtitle>Review and analyze the leave request before click the sumbit button.</v-card-subtitle>
    <v-card-text class="text--primary">
      <v-row>
        <v-col cols="auto">
          <div>
            <div class="overline">Leave Type</div>
            <div class="subtitle-1">{{leaveType}}</div>
          </div>
        </v-col>
        <v-col cols="auto">
          <div>
            <div class="overline">Date to Start and End</div>
            <div class="subtitle-1">{{startEndDate}}</div>
          </div>
        </v-col>
        <v-col cols="auto">
          <div>
            <div class="overline">Leave Duration</div>
            <div class="subtitle-1">{{totalDays}}</div>
          </div>
        </v-col>
        <v-col cols="12">
          <div>
            <div class="overline">Reason</div>
            <div class="subtitle-1">{{reason}}</div>
          </div>
        </v-col>
        <v-col cols="auto">
          <div>
            <div class="overline">Approver</div>
            <div class="d-flex" v-if="approver.employeeId">
              <v-list-item-avatar>
                <base-image v-if="approver.photo" :src="approver.photo.imageUrl" />
                <base-image v-else />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{approver.fullName}}</v-list-item-title>
                <v-list-item-subtitle>Manager/Head Department</v-list-item-subtitle>
              </v-list-item-content>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: ["startDate", "endDate", "leaveTypeId", "reason", "status", "range"],

  computed: {
    leaveType() {
      return this.$store.state.leaveTypes.dropdown.filter(
        item => item.id === this.leaveTypeId
      )[0].name;
    },

    startEndDate() {
      return `${dayjs(this.startDate).format("MMMM DD, YYYY - dddd")} - ${dayjs(
        this.endDate
      ).format("MMMM DD, YYYY - dddd")} `;
    },

    totalDays() {
      return `${dayjs(this.endDate).diff(this.startDate, "day")} Day(s)`;
    },

    approver() {
      return this.$store.state.auth.departmentHead;
    }
  }
};
</script>

<style>
</style>