<template>
  <main class="content">
    <head-banner />
  </main>
</template>

<script>
import HeadBanner from '@/components/HeadBanner.vue';

export default {
  components: {
    'head-banner': HeadBanner,
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}
</style>
