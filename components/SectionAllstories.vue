<template>
  <section class="section-allstories">
    <ui-title class="section-allstories__title">
      {{ getSectionData.title }}
    </ui-title>
    <ui-search class="section-allstories__search" />
    <ui-story-grid
      class="section-allstories__story-grid"
      v-if="!nothingNoFound"
    >
      <ui-story-card
        v-for="card of renderStories"
        :key="card.id"
        :photo="findImageSize(card)"
        :name="card.author"
        :quote="card.title"
        :id="card.id"
      />
    </ui-story-grid>
    <ui-no-found class="section-allstories__no-found" v-if="nothingNoFound" />
    <ui-pagination-buttons
      class="content__pagination-buttons"
      :getStoriesData="filterStories"
    />
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

  computed: {
    filterStories() {
      if (this.getSearchData.searchValue.trim()) {
        return this.getStoriesData.filter(data => {
          return data.author
            .toLowerCase()
            .includes(this.getSearchData.searchValue.toLowerCase());
        });
      }

      return this.getStoriesData;
    },
    renderStories() {
      return this.filterStories.filter(
        (card, index) =>
          index <
            this.getPaginationData.perPage *
              this.getPaginationData.currentPage &&
          index >=
            this.getPaginationData.perPage *
              this.getPaginationData.currentPage -
              this.getPaginationData.perPage
      );
    },
    nothingNoFound() {
      return this.filterStories.length > 0 ? false : true;
    },
    getStoriesData() {
      return this.$store.getters['global-storiesData/getStoriesData'];
    },
    getSectionData() {
      return this.$store.getters['sectionAllstories/getData'];
    },
    getPaginationData() {
      return this.$store.getters['ui-pagination/getData'];
    },
    getSearchData() {
      return this.$store.getters['ui-search/getData'];
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

    countStories() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          this.setPaginationData('perPage', 16);
        } else if (window.innerWidth > 425) {
          this.setPaginationData('perPage', 12);
        } else if (window.innerWidth <= 425) {
          this.setPaginationData('perPage', 9);
        }
      } else {
        this.setPaginationData('perPage', 16);
      }
    },
    setPaginationData(prop, value) {
      return this.$store.commit('ui-pagination/setPropertiesData', {
        prop,
        value,
      });
    },
  },

  created: function() {
    this.countStories();
  },

  async fetch() {
    await this.$store.dispatch('global-storiesData/storiesDataRequest');
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
