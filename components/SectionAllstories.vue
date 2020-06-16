<template>
  <section class="section-allstories">
    <ui-title class="content__title">
      Истории неизлечимых привычек
    </ui-title>
    <ui-search class="content__search" />
    <ui-story-grid>
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
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import StoryGrid from '@/components/ui/StoryGrid.vue';
import StoryCard from '@/components/ui/StoryCard.vue';
import Search from '@/components/ui/Search.vue';
import PaginationButtons from '@/components/ui/PaginationButtons.vue';

export default {
  components: {
    'ui-title': Title,
    'ui-story-grid': StoryGrid,
    'ui-story-card': StoryCard,
    'ui-search': Search,
    'ui-pagination-buttons': PaginationButtons,
  },
};
</script>

<style lang="scss" scoped>
.section-allstories {
  max-width: 1440px;
  padding: 100px 60px;
}

.content__search {
  margin: 60px 0 70px;
}

.content__pagination-buttons {
  margin: 140px 0 0;
}

@media screen and (max-width: 1280px) {
  .section-allstories {
    padding: 100px 50px;
  }
}

@media screen and (max-width: 1024px) {
  .section-allstories {
    padding: 100px 50px;
  }
}

@media screen and (max-width: 768px) {
  .section-allstories {
    padding: 100px 40px;
  }
}

@media screen and (max-width: 425px) {
  .section-allstories {
    padding: 100px 15px;
  }
}
</style>
