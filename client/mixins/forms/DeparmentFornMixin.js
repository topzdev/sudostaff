export default {
  data() {
    return {
      department: {
        id: null,
        name: "",
        description: "",
        employeeId: null,
        departmentHead: null
      },

      departmentRules: {
        name: [v => !!v || "Department Name is required"],
        employeeId: [v => !!v || "Department Head is required"]
      }
    };
  }
};
