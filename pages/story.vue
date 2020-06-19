<template>
  <main class="content">
    <section-article class="content__section-article" />
    <!-- <ui-no-found-404 class="content__no-found-404" /> -->
  </main>
</template>

<script>
import SectionArticle from '@/components/SectionArticle';
import NoFound404 from '@/components/ui/NoFound404';

export default {
  components: {
    'section-article': SectionArticle,
    'ui-no-found-404': NoFound404,
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

.content__no-found-404 {
  margin: 0 auto;
}
</style>
