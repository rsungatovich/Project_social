export const state = () => ({
  visiblePopupSocials: false,
});

export const mutations = {
  setPopupState(state) {
    return (state.visiblePopupSocials = !state.visiblePopupSocials);
  },
};

export const getters = {
  getPopupState(state) {
    return state.visiblePopupSocials;
  },
};
