export const state = () => ({
  visible: false,
  text: 'Спасибо что приняли участие!',
});

export const mutations = {
  setPopupState(state) {
    return (state.visible = !state.visible);
  },
};

export const getters = {
  getDescription(state) {
    return state.text;
  },
  getPopupState(state) {
    return state.visible;
  },
};
