<template>
  <section class="section-instagram">
    <div class="section-instagram__description">
      <ui-title class="section-instagram__title">
        {{ title }}
      </ui-title>
      <ui-subtitle class="section-instagram__subtitle">
        {{ subtitle }}
      </ui-subtitle>
    </div>
    <div class="section-instagram__container">
      <ui-instagram-card />
      <ui-instagram-card />
      <ui-instagram-card />
      <ui-instagram-card />
      <ui-instagram-card />
      <ui-instagram-card />
      <ui-instagram-card />
      <ui-instagram-card />
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import InstagramCard from '@/components/ui/InstagramCard';

export default {
  components: {
    'ui-title': Title,
    'ui-subtitle': Subtitle,
    'ui-instagram-card': InstagramCard,
  },

  data() {
    return {
      title: 'Инстаграм',
      subtitle:
        'Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю.',
    };
  },
};
</script>

<style lang="scss" scoped>
.section-instagram {
  max-width: 1440px;
  padding: 100px 60px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
}

.section-instagram__description {
  margin: 0 110px 0 0;
}

.section-instagram__title {
  margin: 0 0 28px;
  text-decoration: underline;
}

.section-instagram__container {
  max-width: 774px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .section-instagram {
    padding: 90px 50px;
  }

  .section-instagram__container {
    max-width: 765px;
    grid-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .section-instagram {
    padding: 80px 50px;
  }

  .section-instagram__description {
    margin: 0 60px 0 0;
  }

  .section-instagram__container {
    max-width: 604px;
    grid-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .section-instagram {
    padding: 80px 40px;
  }

  .section-instagram {
    display: block;
  }

  .section-instagram__description {
    margin: 0;
  }

  .section-instagram__title {
    margin: 0 auto 26px;
    text-align: center;
  }

  .section-instagram__subtitle {
    margin: 0 auto 60px;
  }

  .section-instagram__container {
    max-width: unset;
    grid-gap: 20px;
  }
}

@media screen and (max-width: 425px) {
  .section-instagram {
    padding: 80px 15px;
  }

  .section-instagram__title {
    margin: 0 0 16px;
    text-align: unset;
  }

  .section-instagram__subtitle {
    margin: 0 0 40px;
  }

  .section-instagram__container {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}
</style>
