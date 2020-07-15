export const state = () => ({
  title: 'Инстаграм',
  subtitle:
    'Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю.',
  instagramStories: [
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
    {
      photoe: 'https://volley.sport-liga.pro/images/no_image.png',
      link: 'https://www.instagram.com/raklechitsa/',
    },
  ],
});

export const getters = {
  getTitle(state) {
    return state.title;
  },
  getSubtitle(state) {
    return state.subtitle;
  },
  getInstagramStories(state) {
    return state.instagramStories;
  },
};
