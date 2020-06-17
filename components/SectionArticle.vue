<template>
  <section class="section-article">
    <ui-article class="section-article__article" />
    <ui-story-grid class="section-article__story-grid">
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
      <ui-story-card />
    </ui-story-grid>
    <ui-button-long class="section-article__button-long">
      Больше статей
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
