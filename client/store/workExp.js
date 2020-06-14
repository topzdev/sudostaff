import types from "./types";
import workExpServices from "~/services/WorkExp";
export const state = () => ({
  current: null,
  list: []
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  },
  [types.SET_WORK_EXP](state, list) {
    state.list = list;
  },
  [types.ADD_WORK_EXP](state, data) {
    state.list = [...state.list, data];
  },
  [types.DELETE_WORK_EXP](state, id) {
    state.list = state.list.filter(item => item.id !== id);
  }
};

export const actions = {
  async fetchWorkExp({ rootState, state, commit, dispatch }) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId || state.list.length) return;

      console.log("EMP", employeeId);
      const result = await workExpServices.getAll(employeeId);

      commit(types.SET_WORK_EXP, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async fetchSingleWorkExp({ rootState, state, commit, dispatch }, id) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await workExpServices.getOne(id);

      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async addWorkExp({ rootState, commit, dispatch }, data) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await workExpServices.create({
        employeeId,
        ...data
      });

      commit(types.ADD_WORK_EXP, {
        ...data,
        id: result.data
      });
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async deleteWorkExp({ commit, dispatch }, id) {
    try {
      const result = await workExpServices.delete(id);

      commit(types.DELETE_WORK_EXP, id);
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
