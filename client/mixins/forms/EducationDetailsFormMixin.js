export default {
  data() {
    return {
      educDetails: {
        level: "",
        degree: "",
        schoolName: "",
        from: "",
        to: "",
        graduateYear: 0,
        recognition: "",
        scholarship: ""
      },

      educDetailsRules: {
        level: [v => !!v || "Level is required"],
        degree: [v => !!v || "Degree is required"],
        schoolName: [v => !!v || "School Name is required"],
        from: [v => !!v || "Date From is required"],
        to: [v => !!v || "Date Until is required"],
        to: [v => !!v || "Date Until is required"]
      }
    };
  }
};
