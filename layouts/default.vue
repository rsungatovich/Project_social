<template>
  <div class="page">
    <!-- <window>
      <the-header />
    </window> -->
    <nuxt />
    <!-- <window>
      <the-footer />
    </window> -->
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

<style lang="scss" scoped></style>
