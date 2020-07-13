<template>
  <main class="content">
    <section-article class="content__section-article" />
  </main>
</template>

<script>
import SectionArticle from '@/components/SectionArticle';
import PopupSocials from '@/components/ui/PopupSocials';

export default {
  components: {
    'section-article': SectionArticle,
    'popup-socials': PopupSocials,
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
