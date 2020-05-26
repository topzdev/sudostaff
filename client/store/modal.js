export const state = () => ({
  children: true
});

export const mutations = {
  showChildren(state, show) {
    state.children = show;
  }
};
