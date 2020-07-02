<template>
  <main class="content">
    <section-policy class="content__section-policy" />
  </main>
</template>

<script>
import SectionPolicy from '@/components/SectionPolicy';

export default {
  components: {
    'section-policy': SectionPolicy,
  },
};
</script>

<style lang="scss" scoped>
.content__section-policy {
  margin: 0 auto;
  font-family: 'Inter', monospace;
}

.content__no-found-404 {
  margin: 0 auto;
}
</style>
