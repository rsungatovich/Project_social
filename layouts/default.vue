<template>
  <div class="page">
    <the-header class="page__header" />
    <nuxt />
    <the-footer class="page__footer" />
    <form-questions v-if="visibleFormQustions" />
    <form-contacts v-if="visibleFormContacts" />
    <popup-socials v-if="visiblePopupSocials" />
    <!-- <ui-no-found-404 v-if="visiblePopupError" /> -->
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormContacts from '@/components/ui/FormContacts';
import FormQuestions from '@/components/ui/FormQuestions';
import PopupSocials from '@/components/ui/PopupSocials';
import NoFound404 from '@/components/ui/NoFound404';

export default {
  components: {
    'the-header': Header,
    'the-footer': Footer,
    'form-questions': FormQuestions,
    'form-contacts': FormContacts,
    'popup-socials': PopupSocials,
    'ui-no-found-404': NoFound404,
  },

  data() {
    return {
      inputValue: '',
    };
  },

  methods: {
    submitForm() {
      console.log(this.inputValue);
    },
  },

  computed: {
    visibleFormQustions() {
      return this.$store.getters['formQuestions/getPopupState'];
    },

    visibleFormContacts() {
      return this.$store.getters['formContacts/getPopupState'];
    },

    visiblePopupSocials() {
      return this.$store.getters['popupSocials/getPopupState'];
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
