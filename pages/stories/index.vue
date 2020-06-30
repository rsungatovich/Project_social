<template>
  <main class="content">
    <section-allstories class="content__section-allstories" />
    <!-- <ui-no-found-404 class="content__no-found-404" /> -->
  </main>
</template>

<script>
import SectionAllstories from '@/components/SectionAllstories';
import NoFound404 from '@/components/ui/NoFound404';

export default {
  components: {
    'section-allstories': SectionAllstories,
    'ui-no-found-404': NoFound404,
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
