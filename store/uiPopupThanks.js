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

export const mutations = {
  setData(state, { name, value }) {
    return (state.data[name] = value);
  },
};
