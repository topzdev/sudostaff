import types from "./types";

export const state = () => ({
  children: false,
  educationDetails: false,
  civilEligibility: false,
  workExp: false,
  voluntaryExp: false,
  training: true,
  messageDialog: {
    show: false,
    message: "",
    type: "",
    title: "",
    isQuestion: false,
    yesLabel: "",
    noLabel: "",
    okayLabel: "",
    yesFunction: undefined,
    noFuntion: undefined
  }
});

export const mutations = {
  showChildren(state, show) {
    state.children = show;
  },
  showEducationDetails(state, show) {
    state.educationDetails = show;
  },
  showCivilEligibility(state, show) {
    state.civilEligibility = show;
  },
  showWorkExp(state, show) {
    state.workExp = show;
  },
  showVoluntaryExp(state, show) {
    state.voluntaryExp = show;
  },
  showTrainingProg(state, show) {
    state.training = show;
  },
  [types.SET_MESSAGE_MODAL](state, options) {
    state.messageDialog = options;
  }
};
