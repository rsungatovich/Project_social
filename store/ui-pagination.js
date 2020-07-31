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
};

export const getters = {
  getPerPage(state) {
    return state.perPage;
  },
  getCurrentPage(state) {
    return state.currentPage;
  },
};
