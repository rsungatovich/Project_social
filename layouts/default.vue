<template>
  <div class="page">
    <the-header class="page__header" :openFormQustions="openFormQustions" />
    <nuxt />
    <the-footer class="page__footer" :openPopupSocials="openPopupSocials" />
    <form-questions
      v-if="visibleFormQustions"
      :closePopup="closePopup"
      @theClick="closePopup"
    />
    <form-contacts v-if="visibleFormContacts" :closePopup="closePopup" />
    <popup-socials v-if="visiblePopupSocials" :closePopup="closePopup" />
    <ui-no-found-404 class="content__no-found-404" v-if="visiblePopupError" />
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
      visibleFormQustions: false,
      visibleFormContacts: false,
      visiblePopupThanks: false,
      visiblePopupSocials: false,
      visiblePopupError: false,
    };
  },

  methods: {
    closePopup() {
      this.visibleFormQustions = false;
      this.visibleFormContacts = false;
      this.visiblePopupThanks = false;
      this.visiblePopupSocials = false;
    },
    openFormQustions() {
      this.visibleFormQustions = true;
    },
    openPopupSocials() {
      this.visiblePopupSocials = true;
    },
    submitForm() {
      console.log(this.inputValue);
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
