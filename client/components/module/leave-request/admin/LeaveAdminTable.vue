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
        <v-btn
          v-if="item.status === 'pending'"
          @click="reviewItem(item.id)"
          color="warning"
          small
          text
        >Review</v-btn>

        <v-btn v-else @click="viewItem(item.id)" color="primary" small text>View</v-btn>
      </template>

      <template v-slot:item.startDate="{item}">{{formatDate(item.startDate)}}</template>

      <template v-slot:item.createdAt="{item}">
        <span :title="fromNow(item.createdAt).tip">{{fromNow(item.createdAt).relative}}</span>
      </template>

      <template v-slot:item.endDate="{item}">{{formatDate(item.endDate)}}</template>

      <template v-slot:item.duration="{item}">{{duration(item.startDate, item.endDate)}}</template>

      <template v-slot:item.status="{item}">
        <v-tooltip color="primary" bottom>
          <template v-slot:activator="{ on }">
            <div v-on="on">
              <leave-request-chips :status="item.status" admin />
            </div>
          </template>
          <span>{{authorTooltip(item.authorizedBy)}}</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import TableMixin from "@/mixins/TableMixin";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export default {
  mixins: [TableMixin],
  data() {
    return {
      dispatch: "leaveRequestAdmin/fetchLeaveRequests",
      store: "leaveRequestAdmin",
      queryParams: {
        exclude: ["updatedAt", "deletedAt"],
        withEmployee: true,
        withLeaveType: true
      },
      headers: [
        {
          text: "Employee",
          value: "submittedBy.fullName"
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
          text: "Submitted At",
          value: "createdAt"
        },
        {
          text: "Status",
          value: "status",
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
    formatDate(date, format) {
      return dayjs(date).format(format || "MMMM DD, YYYY");
    },

    duration(startDate, endDate) {
      const day = dayjs(endDate).diff(startDate, "day");
      return day > 1 ? `${day} Days` : `${day} Day`;
    },

    fromNow(date) {
      return {
        relative: dayjs(date).from(),
        tip: this.formatDate(date, "MMMM DD, YYYY hh:mm:ss A")
      };
    },

    reviewItem(id) {
      this.$router.push("/leave-request/review/" + id);
    },

    viewItem(id) {
      this.$router.push("/leave-request/view/" + id);
    },

    authorTooltip(author) {
      if (!author) return "Needed to be review";
      return "Reviewed by " + author.fullName;
    }
  }
};
</script>

<style>
</style>