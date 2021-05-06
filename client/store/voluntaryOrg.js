import types from "./types";
import voluntaryOrgServices from "~/services/VoluntaryOrg";
export const state = () => ({
  current: null,
  list: []
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  },
  [types.SET_VOLUNTARY_ORG](state, list) {
    state.list = list;
  },
  [types.ADD_VOLUNTARY_ORG](state, data) {
    state.list = [...state.list, data];
  },
  [types.DELETE_VOLUNTARY_ORG](state, id) {
    state.list = state.list.filter(item => item.id !== id);
  }
};

export const actions = {
  async fetchVoluntaryOrg({ rootState, state, commit, dispatch }) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId || state.list.length) return;

      console.log("EMP", employeeId);
      const result = await voluntaryOrgServices.getAll(employeeId);

      commit(types.SET_VOLUNTARY_ORG, result.data);
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  async fetchSingleVoluntaryOrg({ rootState, state, commit, dispatch }, id) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await voluntaryOrgServices.getOne(id);

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
  async addVoluntaryOrg({ rootState, commit, dispatch }, data) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await voluntaryOrgServices.create({
        employeeId,
        ...data
      });

      commit(types.ADD_VOLUNTARY_ORG, {
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

  async deleteVoluntaryOrg({ commit, dispatch }, id) {
    try {
      const result = await voluntaryOrgServices.delete(id);

      commit(types.DELETE_VOLUNTARY_ORG, id);
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
