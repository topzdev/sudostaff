<template>
  <v-card outlined>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :page.sync="pagination.page"
      :items-per-page.sync="pagination.itemsPerPage"
      :server-items-length="list.count"
      :items="list.rows"
      item-key="id"
      fixed-header
      height="400px"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn @click="reviewItem(item.id)" color="warning" small text>Review</v-btn>
      </template>

      <template v-slot:item.startDate="{item}">{{formatDate(item.startDate)}}</template>

      <template v-slot:item.endDate="{item}">{{formatDate(item.endDate)}}</template>

      <template v-slot:item.duration="{item}">{{duration(item.startDate, item.endDate)}}</template>

      <template v-slot:item.status="{item}">
        <v-chip
          small
          v-if="statuses(item.status).isPending"
          color="orange lighten-4 orange--text font-weight-bold"
        >Pending</v-chip>
        <v-chip
          small
          v-if="statuses(item.status).isApproved"
          color="success lighten-5 success--text font-weight-bold"
        >Approved</v-chip>
        <v-chip
          small
          v-if="statuses(item.status).isRejected"
          color="error lighten-5 error--text font-weight-bold"
        >Rejected</v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import TableMixin from "@/mixins/TableMixin";
import dayjs from "dayjs";
export default {
  mixins: [TableMixin],
  data() {
    return {
      dispatch: "leaveRequestAdmin/fetchLeaveRequests",
      store: "leaveRequestAdmin",
      queryParams: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
        withEmployee: true,
        withLeaveType: true
      },
      headers: [
        {
          text: "Employee",
          value: "employee.fullName"
        },
        {
          text: "Type",
          value: "leaveType.name"
        },
        {
          text: "Date Start",
          value: "startDate"
        },
        {
          text: "Date End",
          value: "endDate"
        },
        {
          text: "Duration",
          value: "duration"
        },
        {
          text: "Status",
          value: "status",
          align: "center"
        },
        {
          text: "Authorized By",
          value: "authorizedPersonId",
          align: "center"
        },
        {
          text: "Actions",
          width: "100px",
          align: "center",
          value: "actions",
          sortable: false
        }
      ]
    };
  },
  methods: {
    statuses(status) {
      return {
        isApproved: status === "approved",
        isPending: status === "pending",
        isRejected: status === "rejected"
      };
    },

    formatDate(date) {
      return dayjs(date).format("MMMM DD, YYYY");
    },

    duration(startDate, endDate) {
      const day = dayjs(endDate).diff(startDate, "day");
      return day > 1 ? `${day} Days` : `${day} Day`;
    },

    reviewItem(id) {
      this.$router.push("/leave-request/review/" + id);
    }
  }
};
</script>

<style>
</style>