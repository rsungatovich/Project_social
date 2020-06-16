<template>
  <section class="section-statistic">
    <ui-title class="section-statistic__title">
      Статистика по онкозаболеваниям
    </ui-title>
    <div class="section-statistic__container">
      <ui-progress-card />
      <ui-progress-card />
      <ui-progress-card />
      <ui-progress-card />
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import ProgressCard from '@/components/ui/ProgressCard';

export default {
  components: {
    'ui-title': Title,
    'ui-progress-card': ProgressCard,
  },
};
</script>

<style lang="scss" scoped>
.section-statistic {
  padding: 100px 0;
  font-family: 'Inter', monospace;
}

.section-statistic__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  overflow: scroll;
}

.section-statistic__title {
  margin: 0 0 70px;
}

@media screen and (max-width: 1280px) {
  .section-statistic {
    padding: 90px 0;
  }

  .section-statistic__title {
    margin: 0 0 60px;
  }
}

@media screen and (max-width: 1024px) {
  .section-statistic {
    padding: 80px 0;
  }

  .section-statistic__title {
    margin: 0 0 46px;
  }

  .section-statistic__container {
    grid-gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .section-statistic__title {
    margin: 0 auto 60px;
    text-align: center;
  }

  .section-statistic__container {
    grid-gap: 20px;
  }
}

@media screen and (max-width: 425px) {
  .section-statistic {
    padding: 50px 0;
  }

  .section-statistic__title {
    margin: 0 0 30px;
    text-align: unset;
  }
}

@media screen and (max-width: 320px) {
  .section-statistic__container {
    grid-gap: 10px;
  }
}
</style>
