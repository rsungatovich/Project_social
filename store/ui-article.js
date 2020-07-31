export const state = () => ({
  data: {
    buttonShareSmall: 'Поделитесь ↗',
    buttonShareLong: 'Поделитесь этой статьей в своих социальных сетях ↗',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
