import types from "./types";
import setNotifError from "@/utils/setNotifError";
import leaveRequestServices from "@/services/LeaveRequest";

export const state = () => ({
  loading: false,
  list: {
    rows: [],
    count: 0
  },
  current: null
});

export const mutations = {
  [types.SET_LEAVE_REQUEST](state, list) {
    state.list = list;
  },

  [types.SET_CURRENT](state, current) {
    state.current = current;
  },

  [types.ADD_LEAVE_REQUEST](state, data) {
    state.list = [...state.list.rows, data];
  },
  [types.UPDATE_LEAVEADD_LEAVE_REQUEST](state, data) {
    if (state.list.length)
      state.list = state.list.rows.map(item =>
        item.id === data.id ? data : item
      );
  }
};

export const actions = {
  async fetchOneLeaveRequest(
    { dispatch, commit },
    { id, query: { include, exclude } }
  ) {
    try {
      const result = await leaveRequestServices.getOne(id, {
        include,
        exclude
      });
      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async fetchLeaveRequests({ dispatch, commit }, { include, exclude, status }) {
    try {
      const result = await leaveRequestServices.getAll({
        include,
        exclude,
        status
      });
      commit(types.SET_LEAVE_REQUEST, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async createLeaveRequest({ dispatch, commit, rootState }, data) {
    try {
      const employeeId = rootState.auth.user.id;
      console.log(employeeId);
      if (!employeeId) return;
      const result = await leaveRequestServices.create({ ...data, employeeId });
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.ADD_LEAVE_REQUEST, { ...data, id: result.data });
      this.app.router.push("/leave-request");
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async updateLeaveRequest({ dispatch, commit }, data) {
    try {
      const result = await leaveRequestServices.update(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_LEAVEADD_LEAVE_REQUEST, data);
      this.app.router.push("/leave-request");
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
