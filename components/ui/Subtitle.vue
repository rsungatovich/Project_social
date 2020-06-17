<template>
  <p class="subtitle">
    <slot>section-subtitle</slot>
  </p>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subtitle {
  max-width: 340px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .subtitle {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .subtitle {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .subtitle {
    max-width: 380px;
  }
}

@media screen and (max-width: 425px) {
  .subtitle {
    max-width: 290px;
  }
}

@media screen and (max-width: 320px) {
}
</style>
