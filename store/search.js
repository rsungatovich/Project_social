export const state = () => ({
  searchValue: '',
});

export const mutations = {
  setValue(state, { value }) {
    return (state.searchValue = value);
  },

  resetValue(state) {
    return (state.searchValue = '');
  },
};

export const getters = {
  getValue(state) {
    return state.searchValue;
  },
};
