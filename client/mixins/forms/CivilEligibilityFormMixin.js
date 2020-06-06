export default {
  data() {
    return {
      civilEligibility: {
        licenseTitle: "",
        licenseNumber: "",
        rating: "",
        validityDate: "",
        examinationDate: "",
        examinationPlace: ""
      },
      civilEligibilityRules: {
        licenseTitle: [v => !!v || "License Title is required"],
        licenseNumber: [v => !!v || "License Number is required"],
        rating: [v => !!v || "Rating is required"],
        validityDate: [v => !!v || "Validity Date From is required"],
        examinationDate: [v => !!v || "Examination Date is required"],
        examinationPlace: [v => !!v || "Examination Place is required"]
      }
    };
  }
};
