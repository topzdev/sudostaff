import types from "./types";
import employeeServices from "@/services/Employee";

export const state = () => ({
  user: {
    id: "EMP-001"
  },
  loading: false,
  personalInfo: null,
  contactInfo: null,
  address: null,
  familyDetails: null,
  childrens: [],
  benifits: null,
  educationDetails: [],
  civilEligibility: [],
  workExperience: [],
  trainingPrograms: []
});

export const mutations = {
  [types.SET_PERSONAL_INFO](state, data) {
    state.personalInfo = data;
  },
  [types.SET_LOADING](state, show) {
    state.loading = show;
  }
};

export const actions = {
  async fetchPersonalInfo({ commit, dispatch, state }) {
    try {
      if (state.personalInfo) return;
      commit(types.SET_LOADING, true);

      const result = await employeeServices.getOne(state.user.id, {
        exclude: ["emailAddress", "landline", "mobile"],
        withPhoto: true,
        withDesignation: true
      });

      commit(types.SET_PERSONAL_INFO, result.data);
      commit(types.SET_LOADING, false);
    } catch (error) {
      dispatch("utils/setNotifError", error, { root: true });
    }
  }
};
