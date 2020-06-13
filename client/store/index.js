export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    // fetch initialy the departments and designation data for dropdowns
    await dispatch("leaveTypes/fetchDropdown");
    await dispatch("department/fetchDropdown");
    await dispatch("designation/fetchDropdown");
    await dispatch("personal/fetchPersonalInfo");
  }
};
