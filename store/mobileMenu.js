export const state = () => ({
  isVisible: false,
});

export const mutations = {
  setVisibleState(state) {
    return (state.isVisible = !state.isVisible);
  },
  resetVisibleState(state) {
    return (state.isVisible = false);
  },
};

export const getters = {
  getVisibleState(state) {
    return state.isVisible;
  },
};
