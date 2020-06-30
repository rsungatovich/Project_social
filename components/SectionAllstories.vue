<template>
  <section class="section-allstories">
    <ui-title class="section-allstories__title">
      {{ title }}
    </ui-title>
    <ui-search class="section-allstories__search" />
    <ui-story-grid class="section-allstories__story-grid">
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
    </ui-story-grid>
    <ui-pagination-buttons class="content__pagination-buttons" />
    <!-- <ui-no-found class="section-allstories__no-found" /> -->
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
      title: 'Истории неизлечимых привычек',
    };
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
