<template>
  <a
    class="instagram-card"
    target="_blank"
    href="https://www.instagram.com/raklechitsa/"
  >
    <img class="instagram-card__image" :src="image" alt="Человек" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://volley.sport-liga.pro/images/no_image.png',
    };
  },
};
</script>

<style lang="scss" scoped>
.instagram-card {
  width: 100%;
}

.instagram-card__image {
  width: 100%;
}
</style>
