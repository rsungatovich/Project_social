<template>
  <h2 class="section-title">
    <slot>section-title</slot>
  </h2>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-title {
  max-width: 375px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  font-family: 'Inter', monospace;
}
</style>
