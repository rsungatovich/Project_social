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
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}

.content__section-allstories {
  margin: 0 auto;
}

.content__no-found-404 {
  margin: 0 auto;
}
</style>
