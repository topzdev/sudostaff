import types from "./types";
import setError from "@/utils/setError";

export const state = () => ({
  url: "/department",
  loading: false,
  departments: [],
  current: null
});

export const mutations = {
  [types.SET_DEPARTMENT](state, departments) {
    state.departments = departments;
  },

  [types.ADD_DEPARTMENT](state, department) {
    state.departments = [...state.departments, department];
  },
  [types.UPDATE_DEPARTMENT](state, department) {
    state.departments = state.departments.map(item =>
      item.id === department.id ? department : item
    );
  }
};

export const actions = {
  fetchOneDepartment: async function({ commit, state }, data) {
    try {
    } catch (error) {
      setError(error);
    }
  },
  fetchDepartments: async function({ commit, state }, data) {
    try {
      const result = this.$axios.$get(state.url);
    } catch (error) {
      setError(error);
    }
  },
  addDepartment: async function({ commit }, data) {
    try {
      const result = this.$axios.$get();
    } catch (error) {
      setError(error);
    }
  }
};
