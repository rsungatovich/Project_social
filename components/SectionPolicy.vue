<template>
  <section class="policy">
    <h2 class="policy__title">
      {{ getTitle }}
    </h2>
    <div class="policy__information" v-html="getInformation"></div>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';

export default {
  components: {
    'ui-title': Title,
  },

  computed: {
    getTitle() {
      return this.$store.getters['sectionPolicy/getTitle'];
    },
    getInformation() {
      return this.$store.getters['sectionPolicy/getInformation'];
    },
  },
};
</script>

<style lang="scss" scoped>
.policy {
  max-width: 780px;
  padding: 130px 60px;
}

.policy__title {
  max-width: unset;
  margin: 0 0 130px;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  text-align: center;
}

.policy__information /deep/ .policy__list {
  margin: 0;
  padding: 0 0 0 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
}

.policy__information /deep/ .policy__item {
  margin: 30px 0 0;
  font-weight: 600;
}

.policy__information /deep/ .policy__heading {
  margin: 30px 0 0;
  font-weight: normal;
}

.policy__information /deep/ .policy__sublist {
  padding: 0 0 0 30px;
  font-weight: normal;
}

.policy__information /deep/ .policy__subitem {
  margin: 30px 0 0;
  font-weight: normal;
}

.policy__information /deep/ .policy__item:first-child {
  margin: 0;
}

@media screen and (max-width: 1280px) {
  .policy {
    max-width: 700px;
    padding: 120px 50px;
  }

  .policy__title {
    margin: 0 0 120px;
    font-size: 34px;
    line-height: 44px;
  }

  .policy__information /deep/ .policy__list {
    font-size: 20px;
    line-height: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .policy {
    max-width: 640px;
    padding: 110px 50px;
  }

  .policy__title {
    margin: 0 0 110px;
    font-size: 30px;
    line-height: 38px;
  }

  .policy__information /deep/ .policy__list {
    padding: 0 0 0 20px;
    font-size: 18px;
    line-height: 27px;
  }

  .policy__information /deep/ .policy__sublist {
    padding: 0 0 0 20px;
  }
}

@media screen and (max-width: 768px) {
  .policy {
    padding: 110px 40px;
  }
}

@media screen and (max-width: 425px) {
  .policy {
    max-width: 640px;
    padding: 70px 15px;
  }

  .policy__title {
    max-width: 290px;
    margin: 0 auto 60px;
    font-size: 18px;
    line-height: 21px;
  }

  .policy__information /deep/ .policy__list {
    padding: 0 0 0 15px;
    font-size: 13px;
    line-height: 16px;
  }

  .policy__information /deep/ .policy__sublist {
    padding: 0 0 0 15px;
  }
}

@media screen and (max-width: 320px) {
  .policy__information /deep/ .policy__item {
    margin: 20px 0 0;
  }
  .policy__information /deep/ .policy__heading {
    margin: 20px 0 0;
  }
  .policy__information /deep/ .policy__subitem {
    margin: 20px 0 0;
  }
  .policy__information /deep/ .policy__item:first-child {
    margin: 0;
  }
}
</style>
