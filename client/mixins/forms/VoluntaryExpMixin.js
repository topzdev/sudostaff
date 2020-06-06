export default {
  data() {
    return {
      voluntaryExp: {
        company: "",
        position: "",
        address: "",
        from: 0,
        to: 0,
        totalHours: 0
      },
      voluntaryExpRules: {
        company: [v => !!v || "Company is required"],
        position: [v => !!v || "Position is required"],
        from: [v => !!v || "Date From is required"],
        to: [v => !!v || "Date Until is required"],
        totalHours: [v => !!v || "Total Hours is required"]
      }
    };
  }
};
