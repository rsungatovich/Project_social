export const state = () => ({
  title: 'Проект Благотворительного Фонда Константина Хабенского',
});

export const getters = {
  getTitle(state) {
    return state.title;
  },
};
