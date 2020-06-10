<template>
  <div class="container">
    <slot>components</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
