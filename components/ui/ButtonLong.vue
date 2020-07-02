<template>
  <nuxt-link class="button-long" to="/stories">
    <slot>button-long</slot>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-long {
  width: 100%;
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
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
