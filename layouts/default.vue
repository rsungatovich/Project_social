<template>
  <div class="page">
    <section-header class="page__header" />
    <nuxt />
    <section-footer class="page__footer" />
    <form-questions v-if="getFormQustionsState" />
    <form-contacts v-if="getFormContactsState" />
    <popup-socials v-if="getPopupSocialsState" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormContacts from '@/components/ui/FormContacts';
import FormQuestions from '@/components/ui/FormQuestions';
import PopupSocials from '@/components/ui/PopupSocials';

export default {
  components: {
    'section-header': Header,
    'section-footer': Footer,
    'form-questions': FormQuestions,
    'form-contacts': FormContacts,
    'popup-socials': PopupSocials,
  },

  computed: {
    getFormQustionsState() {
      return this.$store.getters['uiFormQuestions/getData'].visible;
    },

    getFormContactsState() {
      return this.$store.getters['uiFormContacts/getData'].visible;
    },

    getPopupSocialsState() {
      return this.$store.getters['uiPopupSocials/getData'].visible;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  min-width: 320px;
  font-family: 'Inter', monospace;
}

.page__header {
  margin: 0 auto;
}

.page__footer {
  margin: 0 auto;
}
</style>
