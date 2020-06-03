export default {
  data() {
    return {
      designation: {
        id: null,
        name: "",
        description: "",
        departmentId: null
      },

      designationRules: {
        name: [v => !!v || "Designation Name is required"],
        departmentId: [v => !!v || "Department is required"]
      }
    };
  }
};
