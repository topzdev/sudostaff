import types from "./types";
import setNotifError from "@/utils/setNotifError";
import DepartmentAPI from "@/services/Department";

export const state = () => ({
  url: "/department",
  loading: false,
  list: {
    rows: [],
    count: 0
  },
  current: null
});

export const mutations = {
  [types.SET_DEPARTMENTS](state, list) {
    state.list = list;
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
  fetchOneDepartment: async function({ dispatch, commit }, id) {
    try {
      const result = await DepartmentAPI.getOne(id);
      commit(types.SET_CURRENT, result.data);
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    }
  },
  fetchDepartments: async function(
    { dispatch, commit },
    { search, limit, offset }
  ) {
    try {
      const result = await DepartmentAPI.getAll({ search, limit, offset });
      commit(types.SET_DEPARTMENTS, result.data);
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    }
  },
  createDepartment: async function({ dispatch, commit }, data) {
    try {
      const result = await DepartmentAPI.create(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      console.log(result, data);
      commit(types.ADD_DEPARTMENT, { ...data, id: result.data });
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
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
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    } finally {
      this.app.router.push("/department");
    }
  }
};
