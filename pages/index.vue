<template>
  <main class="content">
    <head-banner
      class="content__head-banner"
      @openFormQustions="openFormQustions"
    />
    <section-video class="content__section-video" />
    <tag-banner class="content__tag-banner">
      <template v-slot:title>
        {{ tagContentFirst }}
      </template>
      <template v-slot:subtitle>
        {{ tagFirst }}
      </template>
    </tag-banner>
    <section-mainstories class="content__section-mainstories" />
    <tag-banner class="content__tag-banner">
      <template v-slot:title>
        {{ tagContentSecond }}
      </template>
      <template v-slot:subtitle> {{ tagFirst }} {{ tagSecond }} </template>
    </tag-banner>
    <section-instagram class="content__section-instagram" />
    <section-tellstory
      class="content__section-tellstory"
      @openFormQustions="openFormQustions"
    />
    <section-statistic class="content__section-statistic" />
    <section-about
      class="content__section-about"
      @openFormQustions="openFormQustions"
    />
    <form-questions v-if="visibleFormQustions" @closePopup="closePopup" />
    <form-contacts v-if="visibleFormContacts" @closePopup="closePopup" />
    <popup-thanks v-if="visiblePopupThanks" @closePopup="closePopup" />
  </main>
</template>

<script>
import HeadBanner from '@/components/HeadBanner';
import TagBanner from '@/components/TagBanner';
import SectionVideo from '@/components/SectionVideo';
import SectionMainstories from '@/components/SectionMainstories';
import SectionInstagram from '@/components/SectionInstagram';
import SectionTellstory from '@/components/SectionTellstory';
import SectionStatistic from '@/components/SectionStatistic';
import SectionAbout from '@/components/SectionAbout';
import FormQuestions from '@/components/ui/FormQuestions';
import FormContacts from '@/components/ui/FormContacts';
import PopupThanks from '@/components/ui/PopupThanks';

export default {
  components: {
    'head-banner': HeadBanner,
    'tag-banner': TagBanner,
    'section-video': SectionVideo,
    'section-mainstories': SectionMainstories,
    'section-instagram': SectionInstagram,
    'section-tellstory': SectionTellstory,
    'section-statistic': SectionStatistic,
    'section-about': SectionAbout,
    'form-questions': FormQuestions,
    'form-contacts': FormContacts,
    'popup-thanks': PopupThanks,
  },

  data() {
    return {
      tagFirst: '#этонелечится',
      tagSecond: '#раклечится',
      tagContentFirst: 'и в отличие от рака',
      tagContentSecond: 'рассказывайте ваши истории в инстаграм',
      visibleFormQustions: false,
      visibleFormContacts: false,
      visiblePopupThanks: false,
    };
  },

  methods: {
    closePopup() {
      this.visibleFormQustions = false;
      this.visibleFormContacts = false;
      this.visiblePopupThanks = false;
    },

    openFormQustions() {
      this.visibleFormQustions = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}

.content__head-banner {
  margin: 0 auto;
}

.content__section-video {
  margin: 0 auto;
}

.content__tag-banner {
  margin: 0 auto;
}

.content__section-mainstories {
  margin: 0 auto;
}

.content__tag-banner {
  margin: 0 auto;
}

.content__section-instagram {
  margin: 0 auto;
}

.content__section-tellstory {
  margin: 0 auto;
}

.content__section-statistic {
  margin: 0 auto;
}

.content__section-about {
  margin: 0 auto;
}

.content__no-found-404 {
  margin: 0 auto;
}
</style>
