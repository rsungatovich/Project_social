export const state = () => ({
  tagFirst: '#этонелечится',
  tagSecond: '#раклечится',
  tagContentFirst: 'и в отличие от рака',
  tagContentSecond: 'рассказывайте ваши истории в инстаграм',
});

export const getters = {
  getTagFirst(state) {
    return state.tagFirst;
  },
  getTagSecond(state) {
    return state.tagSecond;
  },
  getTagContentFirst(state) {
    return state.tagContentFirst;
  },
  getTagContentSecond(state) {
    return state.tagContentSecond;
  },
};
