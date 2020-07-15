export const state = () => ({
  title: 'Истории неизлечимых привычек',
});

export const getters = {
  getTitle(state) {
    return state.title;
  },
};
