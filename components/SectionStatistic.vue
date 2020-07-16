<template>
  <section class="section-statistic">
    <ui-title class="section-statistic__title">
      {{ getTitle }}
    </ui-title>
    <div class="section-statistic__container">
      <ui-progress-card
        v-for="card of getCards"
        :key="card.id"
        :progress="card.progress"
      >
        <template v-slot:description>
          {{ card.description }}
        </template>
        <template v-slot:meta>
          {{ card.meta }}
        </template>
        <template v-slot:source>
          {{ card.source }}
        </template>
      </ui-progress-card>
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

  computed: {
    getTitle() {
      return this.$store.getters['sectionStatistic/getTitle'];
    },
    getCards() {
      return this.$store.getters['sectionStatistic/getCards'];
    },
  },
};
</script>

<style lang="scss" scoped>
.section-statistic {
  max-width: 1440px;
  padding: 100px 60px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.section-statistic__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  overflow-x: scroll;
}

.section-statistic__title {
  margin: 0 0 70px;
}

@media screen and (max-width: 1280px) {
  .section-statistic {
    padding: 90px 50px;
  }

  .section-statistic__title {
    margin: 0 0 60px;
  }
}

@media screen and (max-width: 1024px) {
  .section-statistic {
    padding: 80px 50px;
  }

  .section-statistic__title {
    margin: 0 0 46px;
  }

  .section-statistic__container {
    grid-gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .section-statistic {
    padding: 80px 40px;
  }

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
    padding: 50px 15px;
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
