export const state = () => ({
  messages: {
    noFoundTitle: 'Ничего не найдено',
    noFoundSubtitle: 'Попробуйте еще раз.',
    page404Title: '404',
    page404Subtitle: 'Страница не найдена.',
    page404Link: 'Перейти на главную.',
  },
});

export const getters = {
  getMessages(state) {
    return state.messages;
  },
};
