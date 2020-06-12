<template>
  <v-card outlined>
    <v-card-title>Leave Request Summary</v-card-title>
    <v-card-subtitle>Review and analyze the leave request before click the sumbit button.</v-card-subtitle>
    <v-card-text class="text--primary">
      <v-row>
        <v-col v-for="item in items" :key="item.title" :cols="'12'">
          <div class="d-flex align-center">
            <v-row no-gutters>
              <v-col cols="4">
                <div class="subtitle-2">{{item.title}}</div>
              </v-col>
              <v-col>
                <div class="body-1">{{item.value}}</div>
              </v-col>
            </v-row>
          </div>
          <v-divider v-if="item.divider" class="mt-3" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import LeaveUtils from "@/mixins/utils/LeaveUtils";
import dayjs from "dayjs";

export default {
  mixins: [LeaveUtils],
  props: [
    "startDate",
    "endDate",
    "leaveTypeId",
    "reason",
    "status",
    "range",
    "authorizedPersonId",
    "createdAt",
    "authorizedBy",
    "authorizedComment",
    "isView"
  ],

  computed: {
    items() {
      return [
        {
          title: "Leave Type",
          value: this.leaveTypeName,
          divider: true
        },
        {
          title: "Date to start",
          value: dayjs(this.startDate).format("MMMM DD, YYYY (dddd)"),
          divider: true
        },
        {
          title: "Date to end",
          value: dayjs(this.endDate).format("MMMM DD, YYYY (dddd)"),
          divider: true
        },
        {
          title: "Leave Duration",
          value: this.totalDaysLeave,
          divider: true
        },

        {
          title: "Reason",
          value: this.reason
        }
      ];
    },
    leaveTypeName() {
      return this.$store.state.leaveTypes.dropdown.filter(
        item => item.id === this.leaveTypeId
      )[0].name;
    }
  }
};
</script>

<style>
</style>