import types from "./types";
import setNotifError from "@/utils/setNotifError";
import DepartmentAPI from "@/services/Department";

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
  [types.SET_DEPARTMENTS](state, list) {
    state.list = list;
  },
  [types.SET_DROPDOWN](state, list) {
    state.dropdown = list;
  },

  [types.SET_CURRENT](state, current) {
    state.current = current;
  },

  [types.ADD_DEPARTMENT](state, data) {
    state.list = [...state.list.rows, data];
  },
  [types.UPDATE_DEPARTMENT](state, data) {
    if (state.list.length)
      state.list = state.list.rows.map(item =>
        item.id === data.id ? data : item
      );
  }
};

export const actions = {
  fetchOneDepartment: async function(
    { dispatch, commit },
    { id, query: { include, exclude } }
  ) {
    try {
      const result = await DepartmentAPI.getOne(id, {
        include,
        exclude,
        withDeptHead: true
      });
      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  fetchDepartments: async function(
    { dispatch, commit },
    { searchBy, searchText, limit, offset }
  ) {
    try {
      const result = await DepartmentAPI.getAll({
        searchBy,
        searchText,
        limit,
        offset,
        withDeptHead: true
      });
      commit(types.SET_DEPARTMENTS, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  createDepartment: async function({ dispatch, commit }, data) {
    try {
      const result = await DepartmentAPI.create(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      console.log(result, data);
      commit(types.ADD_DEPARTMENT, { ...data, id: result.data });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    } finally {
      this.app.router.push("/department");
    }
  },
  updateDepartment: async function({ dispatch, commit }, data) {
    try {
      const result = await DepartmentAPI.update(data);
      console.log("...updating", result);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_DEPARTMENT, data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    } finally {
      this.app.router.push("/department");
    }
  }
};
