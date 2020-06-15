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

@media screen and (max-width: 1280px) {
  .progress-bar {
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .progress-bar {
    height: 28px;
  }
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 425px) {
}

@media screen and (max-width: 320px) {
}
</style>
