<template>
  <nuxt-link class="story-card" :to="`/stories/${id}`">
    <div class="story-card__image-box">
      <img
        class="story-card__image"
        :src="`https://strapi.kruzhok.io${photo}`"
        alt="Человек"
      />
    </div>
    <h3 class="story-card__title">
      {{ name }}
    </h3>
    <p class="story-card__subtitle">
      {{ quote }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: ['photo', 'name', 'quote', 'id'],
};
</script>

<style lang="scss" scoped>
.story-card {
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.5s ease;
}

.story-card:hover {
  opacity: 0.8;
}

.story-card__image-box {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
}

.story-card__image {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
  object-position: center;
}

.story-card__title {
  margin: 20px 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
}

.story-card__subtitle {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 1024px) {
  .story-card__title {
    margin: 16px 0;
    font-size: 18px;
  }

  .story-card__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
