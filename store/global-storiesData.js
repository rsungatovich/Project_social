export const state = () => ({
  storiesData: [
    {
      id: 5,
      title: 'Моя любовь к чтению книг с конца не лечится, в отличие от рака',
      author: 'Владимир Тен',
      date: '2020-04-06T09:00:00.000Z',
      text:
        '<p>Я всегда читаю книги с конца, - и это не лечится,<br>в отличие от рака.</p><p>В ноябре 2019 года у меня случился эпилептический припадок. Вызвали скорую помощь, которая в спешном порядке отвезла меня в больницу. Сделали МРТ, по результату поставили диагноз – кавернозная гемангиома. Врачи решили не откладывать операцию и удалить это образование. Позже провели гистологическое исследование и установили новый диагноз – диффузная астроцитома.</p><blockquote><p>И эта моя страсть к желанию узнать концовку до того, как я дочитаю книгу, совершенно не лечится, в отличие от рака.</p></blockquote><p>Мое лечение уже закончено, остается только каждый год проходить МРТ.<br><br>Я люблю пешие прогулки и стараюсь проводить как можно больше времени со своей семьей и близкими.<br><br>Еще я обожаю читать. Но есть у меня привычка, которую я даже не стараюсь победить – я всегда читаю книги с конца. Пролистываю до развязки, узнаю, чем все закончится, и только после этого спокойно читаю книгу с самого начала. И эта моя страсть к желанию узнать концовку до того, как я дочитаю книгу, совершенно не лечится, в отличие от рака.<br>&nbsp;</p>',
      created_at: '2020-05-21T10:27:39.395Z',
      updated_at: '2020-05-21T10:27:39.395Z',
      occupation: null,
      celebrity: null,
      seoTitle: null,
      seoDescription: null,
      seoKeywords: null,
      ImageUrl: [
        {
          id: 4,
          name: 'IMG_20191024_184116',
          alternativeText: '',
          caption: '',
          width: 1680,
          height: 1260,
          formats: {
            large: {
              ext: '.jpeg',
              url: '/uploads/large_IMG_20191024_184116_62c1d631ad.jpeg',
              hash: 'large_IMG_20191024_184116_62c1d631ad',
              mime: 'image/jpeg',
              path: null,
              size: 135.1,
              width: 1000,
              height: 750,
            },
            small: {
              ext: '.jpeg',
              url: '/uploads/small_IMG_20191024_184116_62c1d631ad.jpeg',
              hash: 'small_IMG_20191024_184116_62c1d631ad',
              mime: 'image/jpeg',
              path: null,
              size: 41.44,
              width: 500,
              height: 375,
            },
            medium: {
              ext: '.jpeg',
              url: '/uploads/medium_IMG_20191024_184116_62c1d631ad.jpeg',
              hash: 'medium_IMG_20191024_184116_62c1d631ad',
              mime: 'image/jpeg',
              path: null,
              size: 80.88,
              width: 750,
              height: 563,
            },
            thumbnail: {
              ext: '.jpeg',
              url: '/uploads/thumbnail_IMG_20191024_184116_62c1d631ad.jpeg',
              hash: 'thumbnail_IMG_20191024_184116_62c1d631ad',
              mime: 'image/jpeg',
              path: null,
              size: 9.37,
              width: 208,
              height: 156,
            },
          },
          hash: 'IMG_20191024_184116_62c1d631ad',
          ext: '.jpeg',
          mime: 'image/jpeg',
          size: 318.12,
          url: '/uploads/IMG_20191024_184116_62c1d631ad.jpeg',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          created_at: '2020-05-21T10:27:35.169Z',
          updated_at: '2020-05-21T10:27:35.169Z',
        },
      ],
      ogImage: null,
    },
  ],
});

export const getters = {
  getStoriesData(state) {
    return state.storiesData;
  },
};

export const mutations = {
  setStoriesData(state, { data }) {
    return (state.storiesData = data.reverse());
  },
};

export const actions = {
  storiesDataRequest({ state, commit }) {
    return fetch('https://strapi.kruzhok.io/stories')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        console.log(res);
        return Promise.reject(res.status);
      })
      .then(data => {
        return commit('setStoriesData', { data });
      })
      .catch(err => console.log(err));
  },
};
