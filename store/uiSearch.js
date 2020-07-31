export const state = () => ({
  data: {
    searchValue: '',
    buttonReset: 'Очистить',
    buttonSearch: 'Поиск',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};

export const mutations = {
  setData(state, { prop, value }) {
    return (state.data[prop] = value);
  },
};
