export const state = () => ({
  data: [
    {
      id: 1,
      block: 'cover',
      hashtag: '#РАКЛЕЧИТСЯ',
      title: null,
      note: null,
      text: null,
      created_at: '2020-05-20T17:45:12.817Z',
      updated_at: '2020-05-20T17:45:12.817Z',
      extraTexts: [],
    },
  ],
});

export const getters = {
  getData(state) {
    return state.data;
  },
};

export const mutations = {
  setData(state, { data }) {
    return (state.data = data);
  },
};

export const actions = {
  dataRequest({ state, commit }) {
    return fetch('https://strapi.kruzhok.io/blocks')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        console.log(res);
        return Promise.reject(res.status);
      })
      .then(data => {
        return commit('setData', { data });
      })
      .catch(err => console.log(err));
  },
};
