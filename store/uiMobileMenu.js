export const state = () => ({
  data: {
    visible: false,
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
  resetState(state) {
    return (state.data.visible = false);
  },
  toggleState(state) {
    return (state.data.visible = !state.data.visible);
  },
};
