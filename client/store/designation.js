import types from "./types";
import setNotifError from "@/utils/setNotifError";
import DesignationAPI from "@/services/Designation";

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
  [types.SET_DESIGNATIONS](state, list) {
    state.list = list;
  },

  [types.SET_DROPDOWN](state, list) {
    state.dropdown = list;
  },

  [types.SET_CURRENT](state, current) {
    state.current = current;
  },

  [types.ADD_DESIGNATION](state, data) {
    state.list = [...state.list.rows, data];
  },
  [types.UPDATE_DESIGNATION](state, data) {
    if (state.list.length)
      state.list = state.list.rows.map(item =>
        item.id === data.id ? data : item
      );
  }
};

export const actions = {
  fetchOneDesignation: async function(
    { dispatch, commit },
    { id, query: { include, exclude } }
  ) {
    try {
      const result = await DesignationAPI.getOne(id, { include, exclude });
      commit(types.SET_CURRENT, result.data);
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    }
  },
  fetchDesignations: async function(
    { dispatch, commit },
    { searchBy, searchText, limit, offset }
  ) {
    try {
      const result = await DesignationAPI.getAll({
        searchBy,
        searchText,
        limit,
        offset,
        withDept: true
      });
      commit(types.SET_DESIGNATIONS, result.data);
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    }
  },
  createDesignation: async function({ dispatch, commit }, data) {
    try {
      const result = await DesignationAPI.create(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.ADD_DESIGNATION, { ...data, id: result.data });
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    } finally {
      this.app.router.push("/designation");
    }
  },
  updateDesignation: async function({ dispatch, commit }, data) {
    try {
      const result = await DesignationAPI.update(data);
      dispatch("utils/setNotifDefault", result, { root: true });
      commit(types.UPDATE_DESIGNATION, data);
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    } finally {
      this.app.router.push("/designation");
    }
  }
};
