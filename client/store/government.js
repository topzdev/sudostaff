import types from "./types";
import governmentServices from "~/services/Government";
export const state = () => ({
  current: null
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  }
};

export const actions = {
  async fetchGovernment({ rootState, state, commit, dispatch }) {
    try {
      const id = rootState.personal.infoIds.governmentIssuedId;
      if (!id) return;

      const result = await governmentServices.getOne(id);

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
  async updateGovernment({ rootState, commit, dispatch }, data) {
    try {
      const id = rootState.personal.infoIds.governmentIssuedId;
      if (!id) return;

      const result = await governmentServices.update({
        id,
        ...data
      });

      commit(types.SET_CURRENT, data);
      dispatch("utils/setNotifDefault", result, { root: true });
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
