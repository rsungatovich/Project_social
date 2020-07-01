<template>
  <a class="instagram-card" target="_blank" :href="link">
    <img class="instagram-card__image" :src="photoe" alt="Человек" />
  </a>
</template>

<script>
export default {
  props: ['photoe', 'link'],
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
