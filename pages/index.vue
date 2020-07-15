<template>
  <main class="content">
    <head-banner class="content__head-banner" />
    <section-video class="content__section-video" />
    <tag-banner class="content__tag-banner">
      <template v-slot:title>
        {{ getTagContentFirst }}
      </template>
      <template v-slot:subtitle>
        {{ getTagFirst }}
      </template>
    </tag-banner>
    <section-mainstories class="content__section-mainstories" />
    <tag-banner class="content__tag-banner">
      <template v-slot:title>
        {{ getTagContentSecond }}
      </template>
      <template v-slot:subtitle>
        {{ getTagFirst }} {{ getTagSecond }}
      </template>
    </tag-banner>
    <section-instagram class="content__section-instagram" />
    <section-tellstory class="content__section-tellstory" />
    <section-statistic class="content__section-statistic" />
    <section-about class="content__section-about" />
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

  computed: {
    getTagFirst(state) {
      return this.$store.getters['tagBanner/getTagFirst'];
    },
    getTagSecond(state) {
      return this.$store.getters['tagBanner/getTagSecond'];
    },
    getTagContentFirst(state) {
      return this.$store.getters['tagBanner/getTagContentFirst'];
    },
    getTagContentSecond(state) {
      return this.$store.getters['tagBanner/getTagContentSecond'];
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
