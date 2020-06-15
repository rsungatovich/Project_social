<template>
  <main class="content">
    <!-- <head-banner /> -->
    <window>
      <!-- <section-video /> -->
      <!-- <tag-banner>
        и в отличие от рака
      </tag-banner> -->
      <!-- <section-mainstories /> -->
      <!-- <tag-banner>
        рассказывайте ваши истории в инстаграм
      </tag-banner> -->
      <!-- <section-instagram /> -->
      <!-- <section-tellstory /> -->
      <section-statistic />
    </window>
    <!-- <section-about /> -->
  </main>
</template>

<script>
import Window from '@/components/Window';
import HeadBanner from '@/components/HeadBanner';
import TagBanner from '@/components/TagBanner';
import SectionVideo from '@/components/SectionVideo';
import SectionMainstories from '@/components/SectionMainstories';
import SectionInstagram from '@/components/SectionInstagram';
import SectionTellstory from '@/components/SectionTellstory';
import SectionStatistic from '@/components/SectionStatistic';
import SectionAbout from '@/components/SectionAbout';

export default {
  components: {
    window: Window,
    'head-banner': HeadBanner,
    'tag-banner': TagBanner,
    'section-video': SectionVideo,
    'section-mainstories': SectionMainstories,
    'section-instagram': SectionInstagram,
    'section-tellstory': SectionTellstory,
    'section-statistic': SectionStatistic,
    'section-about': SectionAbout,
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}
</style>
