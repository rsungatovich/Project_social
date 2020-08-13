<template>
  <main class="content">
    <section-allstories class="content__section-allstories" />
  </main>
</template>

<script>
import SectionAllstories from '@/components/SectionAllstories';

export default {
  components: {
    'section-allstories': SectionAllstories,
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

.content__section-allstories {
  margin: 0 auto;
}
</style>
