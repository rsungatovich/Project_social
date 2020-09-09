export const state = () => ({
  data: {
    isVisible: true,
    slides: [
      {
        video: 'https://www.youtube.com/embed/ou60K0WfcJ0?fs=0&color=white',
        image: '/images/Pozner1.jpg',
      },
      {
        video: 'https://www.youtube.com/embed/FFrioIZ65q0?fs=0&color=white',
        image: '/images/Rinat1.jpg',
      },
      {
        video: 'https://www.youtube.com/embed/ZKWilQnPovg?fs=0&color=white',
        image: '/images/Olga1.jpg',
      },
    ],
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};

export const mutations = {
  setData(state, { prop, value }) {
    return (state.data[prop] = value);
  },
};
