export const state = () => ({
  content: {
    title: 'Расскажите свою историю',
    subtitle:
      'Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.',
    description: [
      {
        id: 1,
        paragraphs: [
          {
            text:
              'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
          },
        ],
      },
      {
        id: 2,
        paragraphs: [
          {
            text:
              'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
          },
        ],
      },
    ],
  },
});

export const mutations = {};

export const getters = {
  getTitle(state) {
    return state.content.title;
  },
  getSubtitle(state) {
    return state.content.subtitle;
  },
  getDescription(state) {
    return state.content.description;
  },
};
