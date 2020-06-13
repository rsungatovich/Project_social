<template>
  <main class="content">
    <head-banner />
    <container>
      <section-video />
      <tag-banner>
        и в отличие от рака
      </tag-banner>
      <section-mainstories />
      <tag-banner>
        рассказывайте ваши истории в инстаграм
      </tag-banner>
      <section-instagram />
      <section-tellstory />
      <section-statistic />
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container';
import HeadBanner from '@/components/HeadBanner';
import TagBanner from '@/components/TagBanner';
import SectionVideo from '@/components/SectionVideo';
import SectionMainstories from '@/components/SectionMainstories';
import SectionInstagram from '@/components/SectionInstagram';
import SectionTellstory from '@/components/SectionTellstory';
import SectionStatistic from '@/components/SectionStatistic';

export default {
  components: {
    container: Container,
    'head-banner': HeadBanner,
    'tag-banner': TagBanner,
    'section-video': SectionVideo,
    'section-mainstories': SectionMainstories,
    'section-instagram': SectionInstagram,
    'section-tellstory': SectionTellstory,
    'section-statistic': SectionStatistic,
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}
</style>
