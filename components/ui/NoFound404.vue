<template>
  <div class="no-found-404">
    <h2 class="no-found-404__title">
      404
    </h2>
    <p class="no-found-404__subtitle">
      Страница не найдена.
      <nuxt-link to="/" class="no-found-404__link">
        Перейти на главную.
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.no-found-404 {
  max-width: 1440px;
  min-height: 824px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.no-found-404__title {
  margin: 0 0 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;
  text-align: center;
}

.no-found-404__subtitle {
  max-width: 200px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
}

.no-found-404__link {
  color: #000000;
}

@media screen and (max-width: 1280px) {
  .no-found-404 {
    min-height: 628px;
  }
}

@media screen and (max-width: 1024px) {
  .no-found-404__subtitle {
    max-width: 200px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 768px) {
  .no-found-404 {
    min-height: 952px;
  }
}

@media screen and (max-width: 425px) {
  .no-found-404 {
    min-height: 636px;
  }

  .no-found-404__title {
    margin: 0 0 5px;
    font-size: 72px;
    line-height: 87px;
  }

  .no-found-404__subtitle {
    max-width: 160px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
