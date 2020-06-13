import types from "./types";
import trainingProgramServices from "~/services/TrainingProgram";
export const state = () => ({
  current: null,
  list: []
});

export const mutations = {
  [types.SET_CURRENT](state, data) {
    state.current = data;
  },
  [types.SET_TRAINING_PROGRAM](state, list) {
    state.list = list;
  },
  [types.ADD_TRAINING_PROGRAM](state, data) {
    state.list = [...state.list, data];
  },
  [types.DELETE_TRAINING_PROGRAM](state, id) {
    state.list = state.list.filter(item => item.id !== id);
  }
};

export const actions = {
  async fetchTrainingProgram({ rootState, state, commit, dispatch }) {
    try {
      const employeeId = rootState.personal.user.id;
      if (!employeeId || state.list.length) return;

      console.log("EMP", employeeId);
      const result = await trainingProgramServices.getAll(employeeId);

      commit(types.SET_TRAINING_PROGRAM, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async fetchSingleTrainingProgram({ rootState, state, commit, dispatch }, id) {
    try {
      const employeeId = rootState.personal.user.id;
      if (!employeeId) return;

      const result = await trainingProgramServices.getOne(id);

      commit(types.SET_CURRENT, result.data);
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },
  async addTrainingProgram({ rootState, commit, dispatch }, data) {
    try {
      const employeeId = rootState.personal.user.id;
      if (!employeeId) return;

      const result = await trainingProgramServices.create({
        employeeId,
        ...data
      });

      commit(types.ADD_TRAINING_PROGRAM, {
        ...data,
        id: result.data
      });
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  },

  async deleteTrainingProgram({ commit, dispatch }, id) {
    try {
      const result = await trainingProgramServices.delete(id);

      commit(types.DELETE_TRAINING_PROGRAM, id);
      dispatch("utils/setNotifDefault", result, { root: true });
    } catch ({ response: { data } }) {
      dispatch("utils/setNotifDefault", data, { root: true });
    }
  }
};
