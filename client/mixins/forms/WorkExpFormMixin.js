export default {
  data() {
    return {
      workExp: {
        company: "",
        position: "",
        salaryGrade: "",
        stepIncremented: "",
        monthlySalaray: 0,
        from: 0,
        to: 0,
        isFullTime: false,
        isGovernmentService: false
      },
      workExpRules: {
        company: [v => !!v || "Company is required"],
        position: [v => !!v || "Position is required"],
        salaryGrade: [v => !!v || "Salary Grade is required"],
        stepIncremented: [v => !!v || "Step Incremented is required"],
        from: [v => !!v || "Date From is required"],
        to: [v => !!v || "Date Until is required"]
      }
    };
  }
};
