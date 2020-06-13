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
  padding: 0 90px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
