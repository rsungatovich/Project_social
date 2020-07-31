export const state = () => ({
  data: {
    buttonMain: 'Главная',
    buttonStories: 'Истории',
    buttonShare: 'Поделитесь ↗',
    copyrightFirst: 'Рак Лечится 2020',
    copyrightLast: 'Сделано студентами Яндекс Практикум',
    title: 'Спасибо всем, кто помог состояться этому проекту',
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
