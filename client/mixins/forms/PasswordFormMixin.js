export default {
  data() {
    return {
      password: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      },

      passwordRules: {
        currentPassword: [v => !!v || "Current Password is required"],
        newPassword: [
          v => !!v || "New Password is required",
          v => (v.length < 5 ? "Password is too short" : null)
        ],
        confirmPassword: [v => !!v || "Confirm Password is required"]
      }
    };
  }
};
