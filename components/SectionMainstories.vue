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
      {{ title }}
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
    <ui-button-long class="section-mainstories__button-long">
      Больше статей
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

  data() {
    return {
      title: 'Истории неизлечимых привычек',
    };
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
