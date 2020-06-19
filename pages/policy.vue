<template>
  <main class="content">
    <section-policy class="content__section-policy" />
    <!-- <ui-no-found-404 class="content__no-found-404" /> -->
  </main>
</template>

<script>
import SectionPolicy from '@/components/SectionPolicy';
import NoFound404 from '@/components/ui/NoFound404';

export default {
  components: {
    'section-policy': SectionPolicy,
    'ui-no-found-404': NoFound404,
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
