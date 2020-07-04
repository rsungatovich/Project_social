<template>
  <section class="section-article">
    <ui-article
      class="section-article__article"
      :openPopupSocials="openPopupSocials"
    />
    <ui-story-grid class="section-article__story-grid">
      <ui-story-card
        v-for="card of renderCards"
        :key="card.id"
        :photoe="card.photoe"
        :name="card.name"
        :quote="card.quote"
      />
    </ui-story-grid>
    <ui-button-long class="section-article__button-long">
      Больше статей
    </ui-button-long>
  </section>
</template>

<script>
import Article from '@/components/ui/Article';
import StoryGrid from '@/components/ui/StoryGrid';
import StoryCard from '@/components/ui/StoryCard';
import ButtonLong from '@/components/ui/ButtonLong';

export default {
  components: {
    'ui-article': Article,
    'ui-story-grid': StoryGrid,
    'ui-story-card': StoryCard,
    'ui-button-long': ButtonLong,
  },

  props: ['openPopupSocials'],

  data() {
    return {
      cards: [
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 1',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 2',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 3',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 4',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 5',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 6',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 7',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 8',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 9',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 10',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 11',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 12',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 13',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 14',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 15',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
        {
          photoe: 'https://volley.sport-liga.pro/images/no_image.png',
          name: 'Имя человека 16',
          quote: 'Цитата человека, оставленная в разделе истории.',
        },
      ],
    };
  },

  computed: {
    renderCards() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          return this.cards.filter((card, index) => index < 4);
        } else if (window.innerWidth > 530) {
          return this.cards.filter((card, index) => index < 3);
        } else if (window.innerWidth <= 530) {
          return this.cards.filter((card, index) => index < 2);
        }
      } else {
        return this.cards.filter((card, index) => index < 4);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section-article {
  max-width: 1440px;
  padding: 130px 60px 100px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.section-article__article {
  margin: 0 0 190px;
}

.section-article__button-long {
  margin: 70px 0 0;
}

@media screen and (max-width: 1280px) {
  .section-article {
    padding: 100px 50px 90px;
  }

  .section-article__article {
    margin: 0 0 180px;
  }

  .section-article__button-long {
    margin: 60px 0 0;
  }
}

@media screen and (max-width: 1024px) {
  .section-article {
    padding: 100px 50px 80px;
  }

  .section-article__article {
    margin: 0 0 144px;
  }

  .section-article__button-long {
    margin: 46px 0 0;
  }
}

@media screen and (max-width: 768px) {
  .section-article {
    padding: 100px 40px 80px;
  }

  .section-article__button-long {
    margin: 40px 0 0;
  }
}

@media screen and (max-width: 425px) {
  .section-article {
    padding: 50px 15px;
  }

  .section-article__article {
    margin: 0 0 120px;
  }
}
</style>
