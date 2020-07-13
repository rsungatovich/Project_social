export const state = () => ({
  visiblePopupThanks: false,
});

export const mutations = {
  setPopupState(state) {
    return (state.visiblePopupThanks = !state.visiblePopupThanks);
  },
};

export const getters = {
  getPopupState(state) {
    return state.visiblePopupThanks;
  },
};
