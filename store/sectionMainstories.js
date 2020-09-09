export const state = () => ({
  data: {
    buttonName: 'Больше статей',
    title: 'Истории неизлечимых привычек',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
