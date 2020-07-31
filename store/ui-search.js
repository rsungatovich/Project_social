export const state = () => ({
  data: {
    searchValue: '',
    buttonReset: 'Очистить',
    buttonSearch: 'Поиск',
  },
});

export const mutations = {
  setPropertiesData(state, { prop, value }) {
    return (state.data[prop] = value);
  },
};

export const getters = {
  getData(state) {
    return state.data;
  },
};
