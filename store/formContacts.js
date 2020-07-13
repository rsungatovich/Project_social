export const state = () => ({
  visibleFormContacts: false,
});

export const mutations = {
  setPopupState(state) {
    return (state.visibleFormContacts = !state.visibleFormContacts);
  },
};

export const getters = {
  getPopupState(state) {
    return state.visibleFormContacts;
  },
};
