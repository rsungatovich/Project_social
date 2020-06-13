<template>
  <div class="progress-bar">
    <div class="progress-bar__scale"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 100%;
  height: 40px;
}

.progress-bar__scale {
  width: 10%;
  height: 100%;
  background-color: $mainColor;
}
</style>
