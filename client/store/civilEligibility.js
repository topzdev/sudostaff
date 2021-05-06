import types from "./types";
import civilServices from "~/services/CivilEligibility";
export const state = () => ({
  current: null,
  list: []
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  },
  [types.SET_CIVIL_ELIGIBILITY](state, list) {
    state.list = list;
  },
  [types.ADD_CIVIL_ELIGIBILITY](state, data) {
    state.list = [...state.list, data];
  },
  [types.DELETE_CIVIL_ELIGIBILITY](state, id) {
    state.list = state.list.filter(item => item.id !== id);
  }
};

export const actions = {
  async fetchCivilEligibility({ rootState, state, commit, dispatch }) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId || state.list.length) return;

      console.log("EMP", employeeId);
      const result = await civilServices.getAll(employeeId);

      commit(types.SET_CIVIL_ELIGIBILITY, result.data);
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  async fetchSingleCivilEligibility(
    { rootState, state, commit, dispatch },
    id
  ) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await civilServices.getOne(id);

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
  async addCivilEligibility({ rootState, commit, dispatch }, data) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await civilServices.create({
        employeeId,
        ...data
      });

      commit(types.ADD_CIVIL_ELIGIBILITY, {
        ...data,
        id: result.data
      });
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  async deleteCivilEligibility({ commit, dispatch }, id) {
    try {
      const result = await civilServices.delete(id);

      commit(types.DELETE_CIVIL_ELIGIBILITY, id);
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
