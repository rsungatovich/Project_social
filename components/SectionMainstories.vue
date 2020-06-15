<template>
  <section class="section-mainstories">
    <ui-story-grid
      class="section-mainstories__story-grid section-mainstories__story-grid_main"
    >
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
    </ui-story-grid>
    <ui-title class="section-mainstories__title">
      Истории неизлечимых привычек
    </ui-title>
    <ui-story-grid>
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
    </ui-story-grid>
    <button class="section-mainstories__button">
      Больше статей
    </button>
  </section>
</template>

<script>
import StoryGrid from '@/components/ui/StoryGrid.vue';
import StoryCard from '@/components/ui/StoryCard.vue';
import Title from '@/components/ui/Title';

export default {
  components: {
    'ui-story-grid': StoryGrid,
    'ui-story-card': StoryCard,
    'ui-title': Title,
  },
};
</script>

<style lang="scss" scoped>
.section-mainstories {
  padding: 100px 0;
}

.section-mainstories__title {
  margin: 70px 0;
}

.section-mainstories__button {
  @extend %button-default;
  width: 100%;
  min-height: 82px;
  margin: 70px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  background-color: #fbfbfb;
}

@media screen and (max-width: 1280px) {
  .section-mainstories {
    padding: 90px 0;
  }

  .section-mainstories__title {
    margin: 60px 0;
  }

  .section-mainstories__button {
    min-height: 78px;
    margin: 60px 0 0;
  }
}

@media screen and (max-width: 1024px) {
  .section-mainstories {
    padding: 80px 0;
  }

  .section-mainstories__title {
    margin: 46px 0;
  }

  .section-mainstories__button {
    min-height: 50px;
    margin: 46px 0 0;
    font-size: 13px;
  }
}

@media screen and (max-width: 768px) {
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

  .section-mainstories__button {
    margin: 40px 0 0;
  }
}

@media screen and (max-width: 425px) {
  .section-mainstories {
    padding: 50px 0;
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
