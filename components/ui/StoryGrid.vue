<template>
  <div class="story-grid">
    <slot>story-content</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.story-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}
</style>
