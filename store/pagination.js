export const state = () => ({
  perPage: 16,
  currentPage: 1,
  numButtons: [1],
});

export const mutations = {
  setPerPage(state, { param }) {
    return (state.perPage = param);
  },
  setCurrentPage(state, { param }) {
    return (state.currentPage = param);
  },
  setTotalStories(state) {
    return (state.totalStories = !state.visible);
  },
  setNumButtons(state, { param }) {
    if (Array.isArray(param)) {
      return (state.numButtons = []);
    }
    return state.numButtons.push(param);
  },
};

export const getters = {
  getPerPage(state) {
    return state.perPage;
  },
  getCurrentPage(state) {
    return state.currentPage;
  },
  getTotalStories(state) {
    return state.totalStories;
  },
  getNumButtons(state) {
    return state.numButtons;
  },
};
