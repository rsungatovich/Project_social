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
  font-family: 'Inter', monospace;
}
</style>
