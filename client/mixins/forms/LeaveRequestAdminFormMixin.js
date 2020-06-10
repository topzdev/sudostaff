import dayjs from "dayjs";
export default {
  data() {
    return {
      leaveRequest: {
        employee: null,
        startDate: dayjs().format("YYYY-MM-DD"),
        endDate: null,
        leaveTypeId: null,
        reason: null,
        status: null,
        leaveType: null,
        authorizedComment: null,
        authorizedPersonId: null,
        createdAt: null
      },
      leaveRequestRules: {
        authorizedComment: [v => !!v || "Comment is required"],
        status: [v => !!v || "Status is required"]
      }
    };
  }
};
