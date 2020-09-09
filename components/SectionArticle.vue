<template>
  <section class="section-article">
    <ui-article class="section-article__article" />
    <ui-story-grid class="section-article__story-grid">
      <ui-story-card
        v-for="card of renderStories"
        :key="card.id"
        :photo="findImageSize(card)"
        :name="card.author"
        :quote="card.title"
        :id="card.id"
      />
    </ui-story-grid>
    <ui-button-long class="section-article__button-long">
      {{ getSectionData.buttonMore }}
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

  computed: {
    renderStories() {
      return this.getStoriesData.filter((card, index) => {
        return index < this.countStories;
      });
    },

    countStories() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          return 4;
        } else if (window.innerWidth > 530) {
          return 3;
        } else if (window.innerWidth <= 530) {
          return 2;
        }
      } else {
        return 4;
      }
    },

    getStoriesData() {
      return this.$store.getters['globalStoriesData/getData'];
    },

    getSectionData() {
      return this.$store.getters['sectionArticle/getData'];
    },
  },

  methods: {
    findImageSize(card) {
      if (card.ImageUrl[0].formats.large)
        return card.ImageUrl[0].formats.large.url;
      if (card.ImageUrl[0].formats.medium)
        return card.ImageUrl[0].formats.medium.url;
      if (card.ImageUrl[0].formats.small)
        return card.ImageUrl[0].formats.small.url;
      if (card.ImageUrl[0].formats.thumbnail)
        return card.ImageUrl[0].formats.thumbnail.url;
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
