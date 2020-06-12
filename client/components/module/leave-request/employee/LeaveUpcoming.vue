<template>
  <v-card v-if="upcoming" outlined>
    <v-card-title class="blue white--text py-5">
      <div class="d-flex">
        <div class="mr-3">
          <v-avatar class="orange white--text">
            <v-icon class="mdi-rotate-45" dark>mdi-airplane</v-icon>
          </v-avatar>
        </div>

        <div v-if="leaveType">
          <div class="overline">
            Upcoming
            <b>{{leaveType.name}}</b>
          </div>
          <h2>{{daysToGo}}</h2>
        </div>
      </div>
    </v-card-title>
    <v-card-text class="py-0 pt-5">
      <div class="d-flex align-center">
        <div>
          <h2 class="font-weight-bold primary--text">{{totalDaysLeave}}</h2>
          <div>of leave</div>
        </div>
        <v-divider vertical class="mx-5" />

        <div>
          <div class="primary--text">Starts</div>
          <h3 class="font-weight-bold text--primary">{{dates.startDate}}</h3>
          <div>{{dates.startDateYear}}</div>
        </div>

        <v-spacer />

        <div>
          <div class="primary--text">End</div>
          <h3 class="font-weight-bold text--primary">{{dates.endDate}}</h3>
          <div>{{dates.endDateYear}}</div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text color="primary">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import LeaveUtils from "@/mixins/utils/LeaveUtils";

export default {
  mixins: [LeaveUtils],
  data() {
    return {
      loading: true,
      startDate: "",
      endDate: "",
      createdAt: "",
      leaveType: null,
      authorizedBy: null
    };
  },

  computed: {
    upcoming() {
      return this.$store.state.leaveRequestEmployee.upcoming;
    },
    daysToGo() {
      if (!this.upcoming) return "";
      const day = dayjs(this.startDate).diff(Date.now(), "day");
      return day > 1 ? `${day} Days to go` : `${day} Day to go`;
    }
  },

  async mounted() {
    await this.$store.dispatch("leaveRequestEmployee/fetchUpcoming", {
      exclude: ["updateAt", "deletedAt"]
    });

    const {
      startDate,
      endDate,
      createdAt,
      leaveType,
      authorizedBy
    } = this.upcoming;

    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.leaveType = leaveType;
    this.authorizedBy = authorizedBy;
  }
};
</script>

<style>
</style>