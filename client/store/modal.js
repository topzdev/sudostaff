export const state = () => ({
  children: false,
  educationDetails: false,
  civilEligibility: false,
  workExp: false,
  voluntaryExp: false,
  training: true
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
  }
};
