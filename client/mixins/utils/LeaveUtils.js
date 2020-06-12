import dayjs from "dayjs";
import advanceFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advanceFormat);

export default {
  computed: {
    statuses() {
      return {
        isApproved: this.status === "approved",
        isPending: this.status === "pending",
        isRejected: this.status === "rejected"
      };
    },
    dates() {
      return {
        startDate: dayjs(this.startDate).format("Do, MMMM"),
        startDateYear: dayjs(this.startDate).format("YYYY"),
        endDate: dayjs(this.endDate).format("Do, MMMM"),
        endDateYear: dayjs(this.endDate).format("YYYY"),
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
          text = "Waiting for response...";
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

    startEndDate() {
      return `${dayjs(this.startDate).format("MMMM DD, YYYY - dddd")} - ${dayjs(
        this.endDate
      ).format("MMMM DD, YYYY - dddd")} `;
    }
  }
};
