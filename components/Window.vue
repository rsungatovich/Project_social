<template>
  <div class="window">
    <slot>components</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.window {
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
}

@media screen and (max-width: 1280px) {
  .window {
    padding: 0 50px;
  }
}

@media screen and (max-width: 768px) {
  .window {
    padding: 0 40px;
  }
}

@media screen and (max-width: 425px) {
  .window {
    padding: 0 15px;
  }
}
</style>
