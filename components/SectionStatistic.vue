<template>
  <section class="section-statistic">
    <ui-title class="section-statistic__title">
      Статистика по онкозаболеваниям
    </ui-title>
    <div class="section-statistic__container">
      <progress-card />
      <progress-card />
      <progress-card />
      <progress-card />
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import ProgressCard from '@/components/ui/ProgressCard';

export default {
  components: {
    'ui-title': Title,
    'progress-card': ProgressCard,
  },
};
</script>

<style lang="scss" scoped>
.section-statistic {
  padding: 100px 0;
}

.section-statistic__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}

.section-statistic__title {
  margin-bottom: 70px;
}
</style>
