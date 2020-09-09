export const state = () => ({
  data: {
    title: 'Инстаграм',
    subtitle:
      'Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю.',
    instagramStories: [
      {
        link: 'https://www.instagram.com/p/CDHjpgWDdnI/',
        photo:
          'https://instagram.fhel3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116132783_1707240419428048_1981721475320205004_n.jpg?_nc_ht=instagram.fhel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=i3pt92WFMXoAX-AFTJb&oh=4534fe7e135adbdaec1ffae80c7b402b&oe=5F4AB724',
      },
      {
        link: 'https://www.instagram.com/p/CCEyBtID96q/',
        photo:
          'https://instagram.fhel3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c224.0.991.991a/s640x640/106101347_601900467123568_8671812185171122293_n.jpg?_nc_ht=instagram.fhel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=YWBlRhsJ0OoAX_et3jO&oh=d09e38a2826c540faa6ddbd96a630c09&oe=5F4B4D8A',
      },
      {
        link: 'https://www.instagram.com/p/B9ld-ULjMiz/',
        photo:
          'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=2as3q4JtS-UAX9vs40j&oh=fea877a48ce6bf34e7da9a09b8c3c61f&oe=5F4BFFA2',
      },
      {
        link: 'https://www.instagram.com/p/B8KJRKihkhd/',
        photo:
          'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/83189715_232427134418801_8228048416125872388_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=_SQQ8mB0Y4YAX8v5HDR&oh=ee8041632e8a6147116e9accab63ca63&oe=5F4C5968',
      },
      {
        link: 'https://www.instagram.com/p/B8KJGYGhzOC/',
        photo:
          'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/83047042_193209518429849_8916172971389104851_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=AbuyKhfRbKQAX-wX4BG&oh=68171fb656fae680405a995b7196a89e&oe=5F4AC13A',
      },
      {
        link: 'https://www.instagram.com/p/B8KIRmxBd7H/',
        photo:
          'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/83539345_2754708931314656_3587841746638548495_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=XAdygyBoD_cAX8zz3_z&oh=f272b56ab5ddb2633df1e12314c5d91d&oe=5F4CBDEF',
      },
      {
        link: 'https://www.instagram.com/p/B8KIDS9BGDB/',
        photo:
          'https://instagram.fhel3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/83627182_2579346312277594_8920178818972027241_n.jpg?_nc_ht=instagram.fhel3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=rgz8KvxN-q8AX8VoLO1&oh=64c826ef549878b23eaaf2be7bf2bb1b&oe=5F4A9035',
      },
      {
        link: 'https://www.instagram.com/p/B8JLwDOB3Mj/',
        photo:
          'https://instagram.fhel3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c241.0.957.957a/s640x640/83115240_223849898624838_1108634677160750460_n.jpg?_nc_ht=instagram.fhel3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=N0Y07nLF-HEAX9BTUGT&oh=56ef01780673736995b02bf0c28c7639&oe=5F4E0A25',
      },
    ],
  },
});

export const getters = {
  getData(state) {
    return state.data;
  },
};
