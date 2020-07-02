<template>
  <main class="content">
    <section-article
      class="content__section-article"
      @openPopupSocials="openPopupSocials"
    />
    <popup-socials v-if="visiblePopupSocials" @closePopup="closePopup" />
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

  data() {
    return {
      visiblePopupSocials: false,
    };
  },

  methods: {
    closePopup() {
      this.visiblePopupSocials = false;
    },

    openPopupSocials() {
      this.visiblePopupSocials = true;
    },
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
