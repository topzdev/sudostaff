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
        id: [v => !!v || "Birth Date is required"],
        joiningDate: [v => !!v || "First Name is required"],
        departmentId: [v => !!v || "Last Name is required"],
        designationId: [v => !!v || "Birth Place is required"]
      }
    };
  }
};
