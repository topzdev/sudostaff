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
      const id = rootState.auth.user.id;
      if (state && !id) return;

      const result = await accountServices.getOne(id);
      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  updatePassword: async function({ dispatch, commit }, data) {
    try {
      const result = await accountServices.updatePassword(data);

      dispatch("utils/setNotifDefault", result, { root: true });
      this.app.router.push("/user/settings");
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  updateUsername: async function({ dispatch, commit }, data) {
    try {
      const result = await accountServices.updateUsername(data);

      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_USERNAME, result.data);
      this.app.router.push("/user/settings");
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
