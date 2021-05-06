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
      pending: null,
      rejected: null,
      approved: null,
      overall: null
    },
    balance: null
  },
  current: null,
  upcoming: null
});

export const mutations = {
  [types.SET_LEAVE_REQUEST_EMPLOYEE](state, list) {
    state.list = list;
  },

  [types.SET_CURRENT](state, current) {
    state.current = current;
  },

  [types.ADD_LEAVE_REQUEST_EMPLOYEE](state, data) {
    state.list = [...state.list.rows, data];
  },
  [types.SUMMARY_LEAVE_REQUEST_EMPLOYEE](state, data) {
    state.summary = data;
  },
  [types.UPCOMING_LEAVE_REQUEST_EMPLOYEE](state, data) {
    state.upcoming = data;
  },
  [types.UPDATE_LEAVE_REQUEST_EMPLOYEE](state, data) {
    if (state.list.length)
      state.list = state.list.rows.map(item =>
        item.id === data.id ? data : item
      );
  }
};

export const actions = {
  async fetchOneLeaveRequest(
    { dispatch, commit },
    { id, query: { include, exclude, withEmployee, withLeaveType } }
  ) {
    try {
      const result = await leaveRequestServices.getOne(id, {
        include,
        exclude,
        withEmployee,
        withLeaveType
      });
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
  async fetchLeaveRequests(
    { dispatch, commit, rootState },
    { include, exclude, status, withLeaveType }
  ) {
    const employeeId = rootState.auth.user.employeeId;
    if (!employeeId) return;

    try {
      const result = await leaveRequestServices.getAllByEmployee(employeeId, {
        include,
        exclude,
        status,
        withLeaveType
      });
      commit(types.SET_LEAVE_REQUEST_EMPLOYEE, result.data);
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  async createLeaveRequest({ dispatch, commit, rootState }, data) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId) return;

      const result = await leaveRequestServices.create({ ...data, employeeId });
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.ADD_LEAVE_REQUEST_EMPLOYEE, { ...data, id: result.data });
      this.app.router.push("/user/leave-request");
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },
  async updateLeaveRequest({ dispatch, commit }, data) {
    try {
      const result = await leaveRequestServices.update(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_LEAVE_REQUEST_EMPLOYEE, data);
      this.app.router.push("/user/leave-request");
    } catch ({ response: { data } }) {
      console.log(data);
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async fetchSummary({ dispatch, commit, rootState, state }) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId && state.summary.balance !== null) return;

      const result = await leaveRequestServices.getSummaryEmployee(employeeId);

      commit(types.SUMMARY_LEAVE_REQUEST_EMPLOYEE, result.data);
    } catch (error) {
      console.error(error);
      dispatch(
        "utils/setNotifDefault",
        "Something went wrong, Please check your console",
        { root: true }
      );
    }
  },

  async fetchUpcoming(
    { dispatch, commit, rootState, state },
    { include, exclude }
  ) {
    try {
      const employeeId = rootState.auth.user.employeeId;
      if (!employeeId && state.summary.balance !== null) return;

      const result = await leaveRequestServices.getUpcoming(employeeId, {
        include,
        exclude
      });

      commit(types.UPCOMING_LEAVE_REQUEST_EMPLOYEE, result.data);
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
