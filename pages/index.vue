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
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container.vue';
import HeadBanner from '@/components/HeadBanner.vue';
import SectionVideo from '@/components/SectionVideo.vue';
import TagBanner from '@/components/TagBanner.vue';
import SectionMainstories from '@/components/SectionMainstories.vue';

export default {
  components: {
    container: Container,
    'head-banner': HeadBanner,
    'section-video': SectionVideo,
    'tag-banner': TagBanner,
    'section-mainstories': SectionMainstories,
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}
</style>
