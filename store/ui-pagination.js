export const state = () => ({
  data: {
    perPage: 16,
    currentPage: 1,
  },
});

export const mutations = {
  setPropertiesData(state, { prop, value }) {
    return (state.data[prop] = value);
  },
};

export const getters = {
  getData(state) {
    return state.data;
  },
};
