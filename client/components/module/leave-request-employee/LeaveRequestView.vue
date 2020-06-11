<template>
  <v-card outlined>
    <v-card-title>
      <employee-template v-if="submittedBy" :employee="submittedBy" />
      <v-spacer />

      <leave-request-chips :status="status" />
    </v-card-title>
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
        <v-col cols="12">
          <div class="d-flex align-center">
            <v-row no-gutters>
              <v-col cols="4">
                <div class="subtitle-2">{{statusText}}</div>
              </v-col>
              <v-col>
                <div class="body-1">
                  <employee-template v-if="authorizedBy" :employee="authorizedBy" />
                </div>
              </v-col>
            </v-row>
          </div>
          <v-divider class="mt-3" />
        </v-col>
        <v-col cols="12">
          <div class="d-flex align-center">
            <v-row no-gutters>
              <v-col cols="4">
                <div class="subtitle-2">Commented</div>
              </v-col>
              <v-col>
                <div class="body-1">{{authorizedComment}}</div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import LeaveRequestUtils from "@/mixins/utils/LeaveRequestUtils";
import dayjs from "dayjs";

export default {
  mixins: [LeaveRequestUtils],
  props: [
    "startDate",
    "endDate",
    "leaveType",
    "reason",
    "status",
    "range",
    "authorizedPersonId",
    "createdAt",
    "authorizedBy",
    "authorizedComment",
    "isView",
    "submittedBy"
  ],

  computed: {
    items() {
      return [
        {
          title: "Leave Type",
          value: this.leaveType ? this.leaveType.name : "",
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
          value: this.reason,
          divider: true
        },
        {
          title: "Submitted at",
          value: this.dates.createdAt,
          divider: true
        }
      ];
    }
  }
};
</script>

<style>
</style>