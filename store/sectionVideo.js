export const state = () => ({
  title: 'Истории людей, победивших рак, но не свои привычки',
  subtitle:
    'Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
});

export const getters = {
  getTitle(state) {
    return state.title;
  },
  getSubtitle(state) {
    return state.subtitle;
  },
};
