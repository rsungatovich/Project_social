export const state = () => ({
  data: {
    tagFirst: '#этонелечится',
    tagSecond: '#раклечится',
    tagContentFirst: 'и в отличие от рака',
    tagContentSecond: 'рассказывайте ваши истории в инстаграм',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
