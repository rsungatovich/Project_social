export const state = () => ({
  data: {
    title: 'Истории неизлечимых привычек',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
