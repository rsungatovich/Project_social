<template>
  <div class="page">
    <the-header class="page__header" />
    <nuxt />
    <the-footer class="page__footer" />
  </div>
</template>

<script>
import Window from '@/components/Window';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    window: Window,
    'the-header': Header,
    'the-footer': Footer,
  },
};
</script>

<style lang="scss" scoped>
.page {
  min-width: 320px;
}

.page__header {
  margin: 0 auto;
}

.page__footer {
  margin: 0 auto;
}
</style>
