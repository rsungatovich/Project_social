export const state = () => ({
  title: 'Спасибо всем, кто помог состояться этому проекту',
});

export const getters = {
  getTitle(state) {
    return state.title;
  },
};
