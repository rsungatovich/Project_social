<template>
  <div class="story-card">
    <img
      class="story-card__image"
      src="https://pkb1.ru/assets/images/default-avatar.png"
      alt="Человек"
    />
    <h3 class="story-card__title">
      Имя человека
    </h3>
    <p class="story-card__subtitle">
      Цитата человека, оставленная в разделе истории.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.story-card {
  width: 100%;
  cursor: pointer;
}

.story-card__image {
  width: 100%;
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
