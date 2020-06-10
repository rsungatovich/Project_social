<template>
  <div>
    <container>
      <my-header />
    </container>
    <nuxt />
    <container> </container>
  </div>
</template>

<script>
import Container from '@/components/Container';
import Header from '@/components/Header';

export default {
  components: {
    'my-header': Header,
    container: Container,
  },
};
</script>

<style lang="scss" scoped></style>
