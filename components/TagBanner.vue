<template>
  <section class="tag-banner">
    <h2 class="tag-banner__title">
      <slot>banner-content</slot>
      <span class="tag-banner__subtitle">#этонелечится</span>
    </h2>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tag-banner {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $mainColor;
  font-family: 'Inter', monospace;
}

.tag-banner__title {
  max-width: 750px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
}

.tag-banner__subtitle {
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 46px;
}
</style>
