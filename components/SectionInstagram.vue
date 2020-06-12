<template>
  <section class="section-instagram">
    <div class="section-instagram__description">
      <ui-title class="section-instagram__title">
        Инстаграм
      </ui-title>
      <ui-subtitle class="section-instagram__subtitle">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
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
};
</script>

<style lang="scss" scoped>
.section-instagram {
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
}

.section-instagram__title {
  margin-bottom: 28px;
  text-decoration: underline;
}

.section-instagram__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
</style>
