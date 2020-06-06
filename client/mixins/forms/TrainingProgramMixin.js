export default {
  data() {
    return {
      trainingProg: {
        title: "",
        from: "",
        to: "",
        totalHours: 0,
        type: "",
        sponsor: ""
      },
      trainingProgRules: {
        title: [v => !!v || "Title is required"],
        sponsor: [v => !!v || "Sponsor is required"],
        type: [v => !!v || "Type is required"],
        totalHours: [v => !!v || "Total Hours is required"],
        from: [v => !!v || "Date From is required"],
        to: [v => !!v || "Date Until is required"]
      }
    };
  }
};
