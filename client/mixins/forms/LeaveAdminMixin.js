import dayjs from "dayjs";
export default {
  data() {
    return {
      leaveRequest: {
        submittedBy: null,
        startDate: dayjs().format("YYYY-MM-DD"),
        endDate: null,
        leaveTypeId: null,
        reason: null,
        status: null,
        leaveType: null,
        employeeId: null,
        authorizedComment: null,
        authorizedPersonId: null,
        authorizedBy: null,
        createdAt: null
      },
      leaveRequestRules: {
        authorizedComment: [v => !!v || "Comment is required"],
        status: [v => !!v || "Status is required"]
      }
    };
  }
};
