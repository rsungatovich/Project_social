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

@media screen and (max-width: 1024px) {
  .story-grid {
    grid-gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .story-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
}

@media screen and (max-width: 530px) {
  .story-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
}

@media screen and (max-width: 425px) {
  .story-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
}
</style>
