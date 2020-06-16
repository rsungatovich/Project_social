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

@media screen and (max-width: 1280px) {
  .middle-button {
    min-height: 48px;
    padding: 0 46px;
  }
}

@media screen and (max-width: 1024px) {
  .middle-button {
    min-height: 46px;
  }
}

@media screen and (max-width: 375px) {
  .middle-button {
    width: 100%;
    min-height: 40px;
    padding: 0;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
