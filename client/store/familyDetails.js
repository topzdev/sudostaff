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
      const id = rootState.personal.infoIds.familyDetailsId;
      if (!id) return;

      const result = await familyDetailsServices.getOne(id);

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
  async updateFamilyDetails({ rootState, commit, dispatch }, data) {
    try {
      const id = rootState.personal.infoIds.familyDetailsId;
      if (!id) return;

      console.log(data);

      const result = await familyDetailsServices.update({
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
