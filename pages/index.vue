<template>
  <main class="content">
    <head-banner />
    <container>
      <section-video />
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container.vue';
import HeadBanner from '@/components/HeadBanner.vue';
import SectionVideo from '@/components/SectionVideo.vue';

export default {
  components: {
    container: Container,
    'head-banner': HeadBanner,
    'section-video': SectionVideo,
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}
</style>
