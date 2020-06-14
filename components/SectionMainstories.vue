<template>
  <section class="section-mainstories">
    <ui-story-grid>
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
  margin-top: 70px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  background-color: #fbfbfb;
}
</style>
