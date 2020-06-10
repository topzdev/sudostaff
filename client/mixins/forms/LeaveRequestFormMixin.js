import dayjs from "dayjs";
export default {
  data() {
    return {
      leaveRequest: {
        startDate: dayjs().format("YYYY-MM-DD"),
        endDate: "",
        leaveTypeId: "",
        reason: "",
        status: "",
        authorizedComment: "",
        leaveType: null
      },
      leaveRequestRules: {
        startDate: [v => !!v || "Start Date is required"],
        endDate: [v => !!v || "End Date is required"],
        leaveTypeId: [v => !!v || "Leave Type is required"],
        reason: [v => !!v || "Reason is required"]
      }
    };
  }
};
