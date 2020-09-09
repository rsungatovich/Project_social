export const state = () => ({
  data: {
    buttonMore: 'Больше статей',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
