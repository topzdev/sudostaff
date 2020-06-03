export default {
  data() {
    return {
      contact: {
        emailAddress: null,
        mobile: null,
        landline: null
      },

      contactRules: {
        emailAddress: [v => !!v || "Enail Address is required"],
        mobile: [v => !!v || "Mobile Number is required"],
        landline: [v => !!v || "Telephone Number is required"]
      }
    };
  }
};
