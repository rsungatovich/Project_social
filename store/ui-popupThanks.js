export const state = () => ({
  data: {
    buttonClose: 'Закрыть',
    description: 'Спасибо что приняли участие!',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
