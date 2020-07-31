<template>
  <section class="section-mainstories">
    <ui-story-grid
      class="section-mainstories__story-grid section-mainstories__story-grid_main"
    >
      <ui-story-card
        v-for="card of renderMainStories"
        :key="card.id"
        :photo="findImageSize(card)"
        :name="card.author"
        :quote="card.title"
        :id="card.id"
      />
    </ui-story-grid>
    <ui-title class="section-mainstories__title">
      {{ getSectionData.title }}
    </ui-title>
    <ui-story-grid>
      <ui-story-card
        v-for="card of renderStories"
        :key="card.id"
        :photo="findImageSize(card)"
        :name="card.author"
        :quote="card.title"
        :id="card.id"
      />
    </ui-story-grid>
    <ui-button-long class="section-mainstories__button-long">
      {{ getSectionData.buttonName }}
    </ui-button-long>
  </section>
</template>

<script>
import ButtonLong from '@/components/ui/ButtonLong';
import StoryGrid from '@/components/ui/StoryGrid';
import StoryCard from '@/components/ui/StoryCard';
import Title from '@/components/ui/Title';

export default {
  components: {
    'ui-button-long': ButtonLong,
    'ui-story-grid': StoryGrid,
    'ui-story-card': StoryCard,
    'ui-title': Title,
  },

  computed: {
    renderStories() {
      return this.getPresentStories.filter(
        (card, index) => index < this.countStories
      );
    },
    renderMainStories() {
      return this.getPresentStories.filter((card, index) => index < 4);
    },
    getStoriesData() {
      return this.$store.getters['globalStoriesData/getData'];
    },
    getSectionData() {
      return this.$store.getters['sectionMainstories/getData'];
    },
    getPresentStories() {
      return this.getStoriesData.filter(card => {
        if (card.id === 71) return true;
        if (card.id === 74) return true;
        if (card.id === 73) return true;
        if (card.id === 72) return true;
        if (card.id === 61) return true;
        if (card.id === 11) return true;
        if (card.id === 27) return true;
        if (card.id === 68) return true;
        if (card.id === 22) return true;
      });
    },
    countStories() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          return 8;
        } else if (window.innerWidth > 530) {
          return 9;
        } else if (window.innerWidth <= 530) {
          return 6;
        }
      } else {
        return 8;
      }
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

  async fetch() {
    await this.$store.dispatch('globalStoriesData/dataRequest');
  },
};
</script>

<style lang="scss" scoped>
.section-mainstories {
  max-width: 1440px;
  padding: 100px 60px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.section-mainstories__title {
  margin: 70px 0;
}

.section-mainstories__button-long {
  margin: 70px 0 0;
}

@media screen and (max-width: 1280px) {
  .section-mainstories {
    padding: 90px 50px;
  }

  .section-mainstories__title {
    margin: 60px 0;
  }

  .section-mainstories__button-long {
    margin: 60px 0 0;
  }
}

@media screen and (max-width: 1024px) {
  .section-mainstories {
    padding: 80px 50px;
  }

  .section-mainstories__title {
    margin: 46px 0;
  }

  .section-mainstories__button-long {
    margin: 46px 0 0;
  }
}

@media screen and (max-width: 768px) {
  .section-mainstories {
    padding: 80px 40px;
  }

  .section-mainstories__story-grid_main {
    max-width: 452px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .section-mainstories__title {
    margin: 60px auto;
    text-align: center;
  }

  .section-mainstories__button-long {
    margin: 40px 0 0;
  }
}

@media screen and (max-width: 425px) {
  .section-mainstories {
    padding: 50px 15px;
  }

  .section-mainstories__story-grid_main {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }

  .section-mainstories__title {
    margin: 50px 0;
    text-align: unset;
  }
}
</style>
