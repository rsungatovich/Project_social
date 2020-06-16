<template>
  <button class="button-small">
    <slot>button</slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-small {
  @extend %button-default;
  min-height: 52px;
  padding: 0 80px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  background-color: $mainColor;
  font-family: 'Inter', monospace;
}
</style>
