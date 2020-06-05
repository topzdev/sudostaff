export default {
  data() {
    return {
      children: {
        fullName: "",
        birthDate: ""
      },
      childrenRules: {
        fullName: [v => !!v || "Name is required"],
        birthDate: [v => !!v || "Birthdate is required"]
      }
    };
  }
};
