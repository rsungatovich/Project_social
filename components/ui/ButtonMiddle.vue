<template>
  <button class="button-middle" @click="$emit('theClick')">
    <slot>button</slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-middle {
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
}

@media screen and (max-width: 1280px) {
  .button-middle {
    min-height: 48px;
    padding: 0 46px;
  }
}

@media screen and (max-width: 1024px) {
  .button-middle {
    min-height: 46px;
  }
}

@media screen and (max-width: 375px) {
  .button-middle {
    width: 100%;
    min-height: 40px;
    padding: 0;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
