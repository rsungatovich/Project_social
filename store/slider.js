export const state = () => ({
  isVisible: true,
  slides: [
    {
      video: 'https://www.youtube.com/embed/ou60K0WfcJ0?fs=0&color=white',
      image: '../../static/images/Pozner1.jpg',
    },
    {
      video: 'https://www.youtube.com/embed/ou60K0WfcJ0?fs=0&color=white',
      image: '../../static/images/Pozner1.jpg',
    },
    {
      video: 'https://www.youtube.com/embed/ou60K0WfcJ0?fs=0&color=white',
      image: '../../static/images/Pozner1.jpg',
    },
  ],
});

export const mutations = {
  setVisibleState(state, { boolean }) {
    return (state.isVisible = boolean);
  },
};

export const getters = {
  getVisibleState(state) {
    return state.isVisible;
  },
  getSlidesData(state) {
    return state.slides;
  },
};
