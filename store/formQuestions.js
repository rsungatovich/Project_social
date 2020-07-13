export const state = () => ({
  visibleFormQustions: false,
});

export const mutations = {
  setPopupState(state) {
    return (state.visibleFormQustions = !state.visibleFormQustions);
  },
};

export const getters = {
  getPopupState(state) {
    return state.visibleFormQustions;
  },
};
