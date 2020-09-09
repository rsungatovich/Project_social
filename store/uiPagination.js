export const state = () => ({
  data: {
    perPage: 16,
    currentPage: 1,
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};

export const mutations = {
  setData(state, { prop, value }) {
    return (state.data[prop] = value);
  },
};
