export const state = () => ({
  visible: false,
  counter: 1,
  forms: {
    1: {
      step: 'Шаг 1 из 12',
      question: 'Как вас зовут?',
      description: '',
    },
    2: {
      step: 'Шаг 2 из 12',
      question: 'Было ли у вас онкологическое заболевание?',
      description:
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    },
    3: {
      step: 'Шаг 3 из 12',
      question: 'Какие занятия приносят Вам наибольшее удовольствие?',
      description:
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    },
    4: {
      step: 'Шаг 4 из 12',
      question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      description: '',
    },
    5: {
      step: 'Шаг 5 из 12',
      question: 'Какие сильные увлечения у Вас есть?',
      description:
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    },
    6: {
      step: 'Шаг 6 из 12',
      question:
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      description: '',
    },
    7: {
      step: 'Шаг 7 из 12',
      question:
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
      description: 'Кроме необходимых, таких, как чистка зубов.',
    },
    8: {
      step: 'Шаг 8 из 12',
      question:
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      description: '',
    },
    9: {
      step: 'Шаг 9 из 12',
      question: 'Что Вас успокаивает/умиротворяет лучше всего?',
      description: '',
    },
    10: {
      step: 'Шаг 10 из 12',
      question:
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      description: '',
    },
    11: {
      step: 'Шаг 11 из 12',
      question: 'Как вы обычно проводите выходные?',
      description: '',
    },
    12: {
      step: 'Шаг 12 из 12',
      question: 'Почта или телефон для связи.',
      description:
        'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    },
  },
  answers: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
  },
});

export const mutations = {
  setCounter(state, { count }) {
    return (state.counter = count);
  },
  setAnswers(state, { name, answer }) {
    return (state.answers[name] = answer);
  },
  setPopupState(state) {
    return (state.visible = !state.visible);
  },
};

export const getters = {
  getCounter(state) {
    return state.counter;
  },
  getForms(state) {
    return state.forms;
  },
  getAnswers(state) {
    return state.answers;
  },
  getPopupState(state) {
    return state.visible;
  },
};
