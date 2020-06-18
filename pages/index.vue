<template>
  <main class="content">
    <head-banner class="content__head-banner" />
    <section-video class="content__section-video" />
    <tag-banner class="content__tag-banner">
      и в отличие от рака
    </tag-banner>
    <section-mainstories class="content__section-mainstories" />
    <tag-banner class="content__tag-banner">
      рассказывайте ваши истории в инстаграм
    </tag-banner>
    <section-instagram class="content__section-instagram" />
    <section-tellstory class="content__section-tellstory" />
    <section-statistic class="content__section-statistic" />
    <section-about class="content__section-about" />
    <!-- <form-questions /> -->
    <!-- <form-contacts /> -->
    <!-- <popup-thanks /> -->
    <popup-socials />
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
import FormContacts from '@/components/ui/FormContacts';
import FormQuestions from '@/components/ui/FormQuestions';
import PopupThanks from '@/components/ui/PopupThanks';
import PopupSocials from '@/components/ui/PopupSocials';

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
    'popup-socials': PopupSocials,
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
</style>
