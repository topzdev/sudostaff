import types from "./types";
import setNotifError from "@/utils/setNotifError";
import leaveRequestServices from "~/services/LeaveRequest";

export const state = () => ({
  loading: false,
  list: {
    rows: [],
    count: 0
  },
  summary: {
    count: {
      pending: 0,
      rejected: 0,
      approved: 0,
      overall: 0
    }
  },
  current: null
});

export const mutations = {
  [types.SET_LEAVE_REQUEST_ADMIN](state, list) {
    state.list = list;
  },

  [types.SET_CURRENT](state, current) {
    state.current = current;
  },

  [types.ADD_LEAVE_REQUEST_ADMIN](state, data) {
    state.list = [...state.list.rows, data];
  },
  [types.SUMMARY_LEAVE_REQUEST_ADMIN](state, data) {
    state.summary = data;
  },
  [types.UPDATE_LEAVE_REQUEST_ADMIN](state, data) {
    if (state.list.length)
      state.list = state.list.rows.map(item =>
        item.id === data.id ? data : item
      );
  }
};

export const actions = {
  async fetchOneLeaveRequest(
    { dispatch, commit },
    { id, query: { include, exclude, withLeaveType, withEmployee } }
  ) {
    try {
      const result = await leaveRequestServices.getOne(id, {
        include,
        exclude,
        withLeaveType,
        withEmployee
      });
      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async fetchLeaveRequests(
    { dispatch, commit },
    { include, exclude, status, withEmployee, withLeaveType }
  ) {
    try {
      const result = await leaveRequestServices.getAll({
        include,
        exclude,
        status,
        withEmployee,
        withLeaveType
      });
      commit(types.SET_LEAVE_REQUEST_ADMIN, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async updateLeaveRequest({ dispatch, commit, rootState }, data) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await leaveRequestServices.updateAdmin({
        ...data,
        authorizedPersonId: employeeId
      });
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_LEAVE_REQUEST_ADMIN, data);
      this.app.router.push("/leave-request");
    } catch ({ response: { data } }) {
      console.log(data);
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async fetchSummary({ dispatch, commit }) {
    try {
      const result = await leaveRequestServices.getSummaryAdmin();

      commit(types.SUMMARY_LEAVE_REQUEST_ADMIN, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
