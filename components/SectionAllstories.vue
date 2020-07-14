<template>
  <section class="section-allstories">
    <ui-title class="section-allstories__title">
      {{ getTitle }}
    </ui-title>
    <ui-search class="section-allstories__search" />
    <ui-story-grid class="section-allstories__story-grid">
      <ui-story-card
        v-for="card of renderCards"
        :key="card.id"
        :photoe="card.photoe"
        :name="card.name"
        :quote="card.quote"
        :id="card.id"
      />
    </ui-story-grid>
    <ui-pagination-buttons class="content__pagination-buttons" />
    <ui-no-found class="section-allstories__no-found" v-if="nothingNoFound" />
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import StoryGrid from '@/components/ui/StoryGrid.vue';
import StoryCard from '@/components/ui/StoryCard.vue';
import Search from '@/components/ui/Search.vue';
import PaginationButtons from '@/components/ui/PaginationButtons.vue';
import NoFound from '@/components/ui/NoFound';

export default {
  components: {
    'ui-title': Title,
    'ui-story-grid': StoryGrid,
    'ui-story-card': StoryCard,
    'ui-search': Search,
    'ui-pagination-buttons': PaginationButtons,
    'ui-no-found': NoFound,
  },

  data() {
    return {
      nothingNoFound: false,
    };
  },

  computed: {
    renderCards() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          return this.storiesData.filter((card, index) => index < 16);
        } else if (window.innerWidth > 425) {
          return this.storiesData.filter((card, index) => index < 12);
        } else if (window.innerWidth <= 425) {
          return this.storiesData.filter((card, index) => index < 9);
        }
      } else {
        return this.storiesData.filter((card, index) => index < 16);
      }
    },
    storiesData() {
      return this.$store.getters['storiesData/getStoriesData'];
    },
    getTitle() {
      return this.$store.getters['sectionAllstories/getTitle'];
    },
  },
};
</script>

<style lang="scss" scoped>
.section-allstories {
  max-width: 1440px;
  padding: 100px 60px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.section-allstories__search {
  margin: 60px 0 70px;
}

.section-allstories__story-grid {
  margin: 0 0 140px;
}

.section-allstories__no-found {
  margin: 110px 0 0;
}

@media screen and (max-width: 1280px) {
  .section-allstories {
    padding: 90px 50px;
  }

  .section-allstories__search {
    margin: 50px 0 60px;
  }

  .section-allstories__story-grid {
    margin: 0 0 130px;
  }
}

@media screen and (max-width: 1024px) {
  .section-allstories {
    padding: 80px 50px;
  }

  .section-allstories__search {
    margin: 40px 0 46px;
  }

  .section-allstories__story-grid {
    margin: 0 0 110px;
  }
}

@media screen and (max-width: 768px) {
  .section-allstories {
    padding: 80px 40px;
  }

  .section-allstories__title {
    margin: 0 auto;
    text-align: center;
  }

  .section-allstories__search {
    margin: 50px 0 60px;
  }
}

@media screen and (max-width: 425px) {
  .section-allstories {
    padding: 50px 15px;
  }

  .section-allstories__title {
    margin: 0;
    text-align: unset;
  }

  .section-allstories__search {
    margin: 40px 0 30px;
  }

  .section-allstories__story-grid {
    margin: 0 0 50px;
  }

  .section-allstories__no-found {
    margin: 60px 0 0;
  }
}
</style>
