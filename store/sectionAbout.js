export const state = () => ({
  content: {
    heading: '#Раклечится',
    title: 'О проекте',
    subtitle:
      'Этот проект был создан благотворительным фондом Константина Хабенского.',
    firstDescription: `<p class="section-about__text">
        Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.
      </p>
      <p class="section-about__text">
        Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.
      </p>`,
    secondDescription: `<p class="section-about__text">
        Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.
      </p>`,
  },
});

export const mutations = {};

export const getters = {
  getHeading(state) {
    return state.content.heading;
  },
  getTitle(state) {
    return state.content.title;
  },
  getSubtitle(state) {
    return state.content.subtitle;
  },
  getFirstDescription(state) {
    return state.content.firstDescription;
  },
  getSecondDescription(state) {
    return state.content.secondDescription;
  },
};
