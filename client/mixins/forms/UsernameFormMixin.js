export default {
  data() {
    return {
      username: {
        newUsername: "",
        password: ""
      },

      usernameRules: {
        newUsername: [
          v => !!v || "Username is required",
          v => v.length > 5 || "Username is too short",
          v => v.length < 20 || "Username is too long"
        ],
        password: [v => !!v || "Password is required"]
      }
    };
  }
};
