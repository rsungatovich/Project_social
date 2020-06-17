<template>
  <button class="button-long">
    <slot>button-long</slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-long {
  @extend %button-default;
  width: 100%;
  min-height: 82px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  background-color: #fbfbfb;
}

@media screen and (max-width: 1280px) {
  .button-long {
    min-height: 78px;
  }
}

@media screen and (max-width: 1024px) {
  .button-long {
    min-height: 50px;
    font-size: 13px;
  }
}
</style>
