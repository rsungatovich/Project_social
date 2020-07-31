export const state = () => ({
  data: {
    visible: false,
    buttonSend: 'Отправить',
    information: {
      headline: 'Оставьте контакт для связи',
      description:
        'Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.',
      nameLabel: 'Как вас зовут?',
      emailLabel: 'Электронная почта',
      phoneLabel: 'Телефон',
      otherLabel:
        'Напишите, если есть предпочтительный способ связи и удобное время',
    },
    inputValues: [],
  },
});

export const mutations = {
  setPopupState(state) {
    return (state.data.visible = !state.data.visible);
  },
  setInputValues(state, { type, value }) {
    return state.data.inputValues.push(`${type}: ${value}`);
  },
};

export const getters = {
  getData(state) {
    return state.data;
  },
};

// Здесь прописываем POST запрос с данными на сервер
