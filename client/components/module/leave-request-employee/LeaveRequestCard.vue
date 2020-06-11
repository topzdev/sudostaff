<template>
  <v-card outlined>
    <v-card-title>
      <v-row no-gutters>
        <v-col cols="7">
          <!-- <span>
            <v-avatar color="primary" size="40" class="mr-1">
              <v-icon color="white">mdi-calendar</v-icon>
            </v-avatar>
          </span>-->
          <span class="font-weight-medium text-truncate">{{leaveType.name}}</span>
        </v-col>

        <v-col class="ml-auto" cols="auto">
          <leave-request-chips icons :status="status" />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-subtitle>
      <span>{{dates.createdAt}}</span>
    </v-card-subtitle>

    <v-card-text class="grey lighten-5 py-5">
      <div class="d-flex align-center">
        <div>
          <h1 class="font-weight-bold primary--text">{{totalDaysLeave}}</h1>
          <div>of leave</div>
        </div>
        <v-divider vertical class="mx-5" />

        <div>
          <div class="primary--text">Starts</div>
          <h2 class="font-weight-bold text--primary">{{dates.startDate}}</h2>
          <div>{{dates.startDateYear}}</div>
        </div>

        <v-divider class="mx-5" />

        <div>
          <div class="primary--text">End</div>
          <h2 class="font-weight-bold text--primary">{{dates.endDate}}</h2>
          <div>{{dates.endDateYear}}</div>
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <leave-request-authorized
        :personId="authorizedPersonId"
        :person="authorizedBy"
        :status="status"
      />

      <v-spacer />
      <v-btn v-if="statuses.isPending" text>Cancel</v-btn>
      <v-btn v-if="statuses.isPending" text color="primary" @click="edit">Edit</v-btn>
      <v-btn v-else text color="primary" @click="view">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LeaveRequestUtils from "@/mixins/utils/LeaveRequestUtils";

export default {
  mixins: [LeaveRequestUtils],
  props: [
    "id",
    "employeeId",
    "startDate",
    "endDate",
    "leaveType",
    "leaveTypeId",
    "status",
    "reason",
    "authorizedComment",
    "authorizedPersonId",
    "authorizedBy",
    "createdAt"
  ],

  methods: {
    edit() {
      this.$router.push("/user/leave-request/update/" + this.id);
    },
    view() {
      this.$router.push("/user/leave-request/view/" + this.id);
    }
  },

  destroyed() {
    this.$store.commit("leaveRequestEmployee/SET_CURRENT", null);
  }
};
</script>

<style>
</style>