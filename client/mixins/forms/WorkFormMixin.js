export default {
  data() {
    return {
      work: {
        id: null,
        joiningDate: null,
        departmentId: null,
        designationId: null
      },

      workRules: {
        id: [v => !!v || "Employee is required"],
        joiningDate: [v => !!v || "Joining Date is required"],
        departmentId: [v => !!v || "Department is required"],
        designationId: [v => !!v || "Birth Place is required"]
      }
    };
  }
};
