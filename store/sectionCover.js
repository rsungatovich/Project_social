export const state = () => ({
  data: {
    title: '#Раклечится',
    buttonName: 'Рассказать историю',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
