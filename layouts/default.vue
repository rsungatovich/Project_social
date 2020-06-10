<template>
  <div>
    <container>
      <my-header />
    </container>
    <nuxt />
    <container>
      <my-footer />
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
    'my-header': Header,
    'my-footer': Footer,
  },
};
</script>

<style lang="scss" scoped></style>
