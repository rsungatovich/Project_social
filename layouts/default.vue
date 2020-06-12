<template>
  <div>
    <container>
      <the-header />
    </container>
    <nuxt />
    <container>
      <the-footer />
    </container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    container: Container,
    'the-header': Header,
    'the-footer': Footer,
  },
};
</script>

<style lang="scss" scoped></style>
