<template>
  <h2 class="title">
    <slot>section-title</slot>
  </h2>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  max-width: 375px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  font-family: 'Inter', monospace;
}

@media screen and (max-width: 1280px) {
  .title {
    max-width: 330px;
    font-size: 28px;
    line-height: 32px;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    max-width: 280px;
    font-size: 24px;
    line-height: 28px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    max-width: 380px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 425px) {
  .title {
    max-width: 290px;
    font-size: 18px;
    line-height: 21px;
  }
}

@media screen and (max-width: 320px) {
}
</style>
