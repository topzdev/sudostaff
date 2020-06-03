export default {
  data() {
    return {
      personal: {
        firstName: null,
        lastName: null,
        middleName: null,
        extensionName: null,
        birthDate: null,
        birthPlace: null,
        citizenship: null,
        bloodType: null,
        height: null,
        weight: null,
        civilStatus: null,
        gender: null
      },

      personalRules: {
        firstName: [v => !!v || "First Name is required"],
        lastName: [v => !!v || "Last Name is required"],
        birthDate: [v => !!v || "Birth Date is required"],
        birthPlace: [v => !!v || "Birth Place is required"],
        gender: [v => !!v || "Gender is required"],
        civilStatus: [v => !!v || "Civil Status is required"],
        citizenship: [v => !!v || "Citizenship is required"],
        bloodType: [v => !!v || "Blood Type is required"],
        height: [v => !!v || "Height is required"],
        weight: [v => !!v || "Weight is required"]
      }
    };
  }
};
