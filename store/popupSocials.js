export const state = () => ({
  visible: false,
  text: 'Поделитесь',
  links: {
    facebook:
      'https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
    twitter:
      'https://twitter.com/intent/tweet?text=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2',
    vkontakte:
      'https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
    odnoklassniki:
      'https://connect.ok.ru/offer?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
    youtube:
      'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
    instagram: 'https://www.instagram.com/raklechitsa/',
  },
});

export const mutations = {
  setPopupState(state) {
    return (state.visible = !state.visible);
  },
};

export const getters = {
  getDescription(state) {
    return state.text;
  },
  getPopupState(state) {
    return state.visible;
  },
  getLinks(state) {
    return state.links;
  },
};
