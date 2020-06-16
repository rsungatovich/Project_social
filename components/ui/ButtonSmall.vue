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
  padding: 0 89px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  background-color: $mainColor;
  font-family: 'Inter', monospace;
}

@media screen and (max-width: 1280px) {
  .button-small {
    min-height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .button-small {
    min-height: 46px;
    padding: 0 80px;
    font-size: 15px;
    line-height: 18px;
  }
}
</style>
