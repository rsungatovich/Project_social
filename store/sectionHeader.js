export const state = () => ({
  data: {
    buttonMain: 'Главная',
    buttonStories: 'Истории',
    buttonTellStory: 'Рассказать историю',
    title: 'Проект Благотворительного Фонда Константина Хабенского',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
