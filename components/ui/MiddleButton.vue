<template>
  <button class="middle-button">
    <slot>button</slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.middle-button {
  @extend %button-default;
  min-height: 52px;
  padding: 0 71px;
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
