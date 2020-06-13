import types from "./types";
import childrenServices from "~/services/Children";
export const state = () => ({
  current: null,
  list: []
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  },
  [types.SET_CHILDRENS](state, list) {
    state.list = list;
  },
  [types.ADD_CHILDREN](state, data) {
    state.list = [...state.list, data];
  },
  [types.DELETE_CHILDREN](state, id) {
    state.list = state.list.filter(item => item.id !== id);
  }
};

export const actions = {
  async fetchChildrens({ rootState, state, commit, dispatch }) {
    try {
      const employeeId = rootState.personal.user.id;
      if (!employeeId || state.list.length) return;
      const result = await childrenServices.getAll(employeeId);
      console.log(employeeId, "FETCHINGG", result);

      commit(types.SET_CHILDRENS, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async fetchSingleChildren({ rootState, state, commit, dispatch }, id) {
    try {
      const employeeId = rootState.personal.user.id;
      if (!employeeId) return;
      console.log(id);
      const result = await childrenServices.getOne(id);

      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async addChildren({ rootState, commit, dispatch }, data) {
    try {
      const employeeId = rootState.personal.user.id;
      if (!employeeId) return;

      const result = await childrenServices.create({
        employeeId,
        ...data
      });

      commit(types.ADD_CHILDREN, {
        ...data,
        id: result.data
      });
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async deleteChildren({ commit, dispatch }, id) {
    try {
      const result = await childrenServices.delete(id);

      commit(types.DELETE_CHILDREN, id);
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
