export const state = () => ({
  perPage: 16,
  currentPage: 1,
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
};
