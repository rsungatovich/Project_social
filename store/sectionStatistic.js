export const state = () => ({
  data: {
    title: 'Статистика по онкозаболеваниям',
    cards: [
      {
        description:
          'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
        meta: '1 из 3',
        source: 'Левада-Центр 2018',
        progress: 33,
      },
      {
        description: '2,6% Россиян имеют онкозаболевания.',
        meta: '3 700 000',
        source: 'Росстат 2018',
        progress: 2.6,
      },
      {
        description:
          'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
        meta: '↑28%',
        source: 'МНИОИ Герцена 2018',
        progress: 28,
      },
      {
        description:
          'На 25% снизилась смертность в течение первого года после постановки диагноза.',
        meta: '↓25%',
        source: 'МНИОИ Герцена 2018',
        progress: 25,
      },
    ],
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
