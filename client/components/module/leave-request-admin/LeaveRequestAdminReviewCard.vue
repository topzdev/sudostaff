<template>
  <v-card outlined>
    <v-card-text class="text--primary">
      <v-row>
        <v-col cols="6">
          <div v-if="submittedBy">
            <div class="overline">Submitted by</div>
            <div class="subtitle-1">
              <employee-template :employee="submittedBy" />
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div>
            <div class="overline">Date Submitted</div>
            <div class="subtitle-1">{{submittedDate}}</div>
          </div>
        </v-col>

        <v-col cols="auto">
          <div v-if="leaveType">
            <div class="overline">Leave Type</div>
            <div class="subtitle-1">{{leaveType.name}}</div>
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
        <v-col cols="12">
          <v-divider />
        </v-col>

        <template v-if="status === 'pending'">
          <v-col cols="12">
            <v-textarea
              label="Comment"
              :value="authorizedComment"
              @input="$emit('update:authorizedComment', $event)"
              outlined
            ></v-textarea>
          </v-col>
        </template>

        <template>
          <v-col cols="12">
            <div>
              <div class="overline">Approver Comment</div>
              <div class="subtitle-1">{{authorizedComment}}</div>
            </div>
          </v-col>
          <v-col cols="12">
            <div v-if="authorizedBy">
              <div class="overline">Authorized by</div>
              <div class="subtitle-1">
                <employee-template :employee="authorizedBy" />
              </div>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: [
    "startDate",
    "endDate",
    "leaveTypeId",
    "reason",
    "status",
    "authorizedPersonId",
    "authorizedComment",
    "submittedBy",
    "authorizedBy",
    "leaveType",
    "createdAt"
  ],

  computed: {
    startEndDate() {
      return `${dayjs(this.startDate).format("MMMM DD, YYYY - dddd")} - ${dayjs(
        this.endDate
      ).format("MMMM DD, YYYY - dddd")} `;
    },

    totalDays() {
      return `${dayjs(this.endDate).diff(this.startDate, "day")} Day(s)`;
    },

    submittedDate() {
      return dayjs(this.createdAt).format("MMMM DD, YYYY hh:m:ss");
    }
  }
};
</script>

<style>
</style>