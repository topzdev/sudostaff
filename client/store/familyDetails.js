import types from "./types";
import familyDetailsServices from "~/services/FamilyDetails";
export const state = () => ({
  current: null
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  }
};

export const actions = {
  async fetchFamilyDetails({ rootState, state, commit, dispatch }) {
    try {
      const id = rootState.auth.infoIds.familyDetailsId;
      if (!id) return;

      const result = await familyDetailsServices.getOne(id);

      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async updateFamilyDetails({ rootState, commit, dispatch }, data) {
    try {
      const id = rootState.auth.infoIds.familyDetailsId;
      if (!id) return;

      console.log(data);

      const result = await familyDetailsServices.update({
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
