<template>
  <section class="section-article">
    <ui-article class="section-article__article" />
    <ui-story-grid class="section-article__story-grid">
      <ui-story-card
        v-for="card of renderStories"
        :key="card.id"
        :photo="getImageUrlBySize(card)"
        :name="card.author"
        :quote="card.title"
        :id="card.id"
      />
    </ui-story-grid>
    <ui-button-long class="section-article__button-long">
      {{ buttonMore }}
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

  data() {
    return {
      buttonMore: 'Больше статей',
      stories: [], // массив с историями
      totalStories: 0, // количество историй
      perPage: 4, // количество историй на странице
      currentPage: 1, // текущая страница
    };
  },

  computed: {
    renderStories() {
      return this.getStoriesData.filter((card, index) => index < this.perPage);
    },
    getStoriesData() {
      return this.$store.getters['storiesData/getStoriesData'];
    },
  },

  methods: {
    getImageUrlBySize(card, size = 'medium') {
      // нужно отрефакторить и перенести в стор
      if (card.ImageUrl[0].formats[size])
        return card.ImageUrl[0].formats[size].url;
      if (card.ImageUrl[0].formats.large)
        return card.ImageUrl[0].formats.large.url;
      if (card.ImageUrl[0].formats.medium)
        return card.ImageUrl[0].formats.medium.url;
      if (card.ImageUrl[0].formats.small)
        return card.ImageUrl[0].formats.small.url;
      if (card.ImageUrl[0].formats.thumbnail)
        return card.ImageUrl[0].formats.thumbnail.url;
    },

    countStories() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          this.perPage = 4;
        } else if (window.innerWidth > 530) {
          this.perPage = 3;
        } else if (window.innerWidth <= 530) {
          this.perPage = 2;
        }
      } else {
        this.perPage = 4;
      }
    },
  },

  created: function() {
    this.countStories();
  },

  async fetch() {
    await this.$store.dispatch('storiesData/storiesDataRequest');
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
