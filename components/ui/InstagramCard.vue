<template>
  <a class="instagram-card" target="_blank" :href="link">
    <img class="instagram-card__image" :src="photo" alt="Человек" />
    <div class="instagram-card__overlay">#раклечится</div>
  </a>
</template>

<script>
export default {
  props: ['photo', 'link'],
};
</script>

<style lang="scss" scoped>
.instagram-card {
  width: 100%;
  height: 100%;
  position: relative;
}

.instagram-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.instagram-card__overlay {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 14px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: #ffffff00;
  transition: all 0.4s ease;
}

.instagram-card:hover .instagram-card__overlay {
  color: #ffffff;
  background-color: #00000085;
}
</style>
