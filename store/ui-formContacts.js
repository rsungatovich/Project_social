export const state = () => ({
  visible: false,
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
  inputValues: {
    name: '',
    email: '',
    phone: '',
    other: '',
  },
});

export const mutations = {
  setPopupState(state) {
    return (state.visible = !state.visible);
  },
  setValues(state, { type, value }) {
    return (state.inputValues[type] = value);
  },
};

export const getters = {
  getInformation(state) {
    return state.information;
  },
  getPopupState(state) {
    return state.visible;
  },
};

// Здесь прописываем POST запрос с данными на сервер
