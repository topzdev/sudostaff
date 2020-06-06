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
      const id = rootState.auth.infoIds.governmentIssuedId;
      if (!id) return;

      const result = await governmentServices.getOne(id);

      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async updateGovernment({ rootState, commit, dispatch }, data) {
    try {
      const id = rootState.auth.infoIds.governmentIssuedId;
      if (!id) return;

      const result = await governmentServices.update({
        id,
        ...data
      });

      commit(types.SET_CURRENT, data);
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
