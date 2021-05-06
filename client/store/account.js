import types from "./types";
import setNotifError from "@/utils/setNotifError";
import accountServices from "@/services/Account";

export const state = () => ({
  current: {
    username: null,
    employeeId: null
  }
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  },
  [types.UPDATE_USERNAME](state, username) {
    state.current.username = username;
  }
};

export const actions = {
  fetchAccount: async function({ dispatch, commit, state, rootState }) {
    try {
      const id = rootState.auth.user.employeeId;
      if (state.current && !id) return;

      const result = await accountServices.getOne(id);
      commit(types.SET_CURRENT, result.data);
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  updatePassword: async function({ dispatch, commit, rootState }, data) {
    try {
      const username = rootState.auth.user.username;
      if (!username) return;

      const result = await accountServices.updatePassword({
        ...data,
        username
      });
      dispatch("utils/setNotifDefault", result, { root: true });
      this.app.router.push("/user/settings");
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  updateUsername: async function({ dispatch, commit, rootState }, data) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await accountServices.updateUsername({
        ...data,
        employeeId
      });

      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_USERNAME, result.data);
      this.app.router.push("/user/settings");
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  resetAccount: async function({ dispatch, commit }, data) {
    try {
      const result = await accountServices.reset(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      this.app.router.push("/account");
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  }
};
