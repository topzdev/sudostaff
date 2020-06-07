import types from "./types";
import setNotifError from "@/utils/setNotifError";
import leaveTypeServices from "@/services/LeaveTypes";

export const state = () => ({
  loading: false,
  list: {
    rows: [],
    count: 0
  },
  dropdown: [],
  current: null
});

export const mutations = {
  [types.SET_LEAVE_TYPES](state, list) {
    state.list = list;
  },

  [types.SET_DROPDOWN](state, list) {
    state.dropdown = list;
  },

  [types.SET_CURRENT](state, current) {
    state.current = current;
  },

  [types.ADD_LEAVE_TYPE](state, data) {
    state.list = [...state.list.rows, data];
  },
  [types.UPDATE_LEAVE_TYPE](state, data) {
    if (state.list.length)
      state.list = state.list.rows.map(item =>
        item.id === data.id ? data : item
      );
  }
};

export const actions = {
  async fetchOneLeaveType(
    { dispatch, commit },
    { id, query: { include, exclude } }
  ) {
    try {
      const result = await leaveTypeServices.getOne(id, { include, exclude });
      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async fetchLeaveTypes({ dispatch, commit }, { include, exclude }) {
    try {
      const result = await leaveTypeServices.getAll({ include, exclude });
      commit(types.SET_LEAVE_TYPES, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async createLeaveType({ dispatch, commit }, data) {
    try {
      const result = await leaveTypeServices.create(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.ADD_LEAVE_TYPE, { ...data, id: result.data });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async updateLeaveType({ dispatch, commit }, data) {
    try {
      const result = await leaveTypeServices.update(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_LEAVE_TYPE, data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
