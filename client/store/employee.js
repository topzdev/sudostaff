import types from "./types";
import setNotifError from "@/utils/setNotifError";
import EmployeeAPI from "@/services/Employee";
import createFormData from "@/utils/createFormData";

export const state = () => ({
  loading: false,
  list: {
    rows: [],
    count: 0
  },
  current: null
});

export const mutations = {
  [types.SET_EMPLOYEES](state, list) {
    state.list = list;
  },

  [types.SET_CURRENT](state, current) {
    state.current = current;
  },

  [types.ADD_EMPLOYEE](state, data) {
    state.list = [...state.list.rows, data];
  },
  [types.UPDATE_EMPLOYEE](state, data) {
    if (state.list.length)
      state.list = state.list.rows.map(item =>
        item.id === data.id ? data : item
      );
  }
};

export const actions = {
  fetchOneEmployee: async function(
    { dispatch, commit },
    { id, query: { include, exclude, withPhoto, withDesignation } }
  ) {
    try {
      const result = await EmployeeAPI.getOne(id, {
        include,
        exclude,
        withPhoto,
        withDesignation
      });
      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  fetchEmployees: async function(
    { dispatch, commit },
    { searchBy, searchText, limit, offset, withPhoto, withDesignation }
  ) {
    try {
      const result = await EmployeeAPI.getAll({
        searchBy,
        searchText,
        limit,
        offset,
        withPhoto,
        withDesignation
      });
      commit(types.SET_EMPLOYEES, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  createEmployee: async function({ dispatch, commit }, data) {
    try {
      // transform data into FormData because this request is a multpart data
      const result = await EmployeeAPI.create(createFormData(data));
      dispatch("utils/setNotifDefault", result, { root: true });
      console.log(result, data);
      commit(types.ADD_EMPLOYEE, { ...data, id: result.data });
      this.app.router.push("/employee");
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  updateEmployee: async function({ dispatch, commit }, data) {
    try {
      // transform data into FormData because this request is a multpart data and add true value for is update so that when the value is falsy its still add it on form data.
      const result = await EmployeeAPI.update(createFormData(data, true));
      console.log("...updating", result);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_EMPLOYEE, data);
      this.app.router.push("/employee");
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
