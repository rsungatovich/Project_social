<template>
  <main class="content">
    <section-article class="content__section-article" />
  </main>
</template>

<script>
import SectionArticle from '@/components/SectionArticle';

export default {
  components: {
    'section-article': SectionArticle,
  },
  async fetch() {
    await this.$store.dispatch('globalContentData/dataRequest');
    await this.$store.dispatch('globalStoriesData/dataRequest');
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}

.content__section-article {
  margin: 0 auto;
}
</style>
