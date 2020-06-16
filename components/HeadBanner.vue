<template>
  <section class="head-banner">
    <div class="head-banner__box">
      <h2 class="head-banner__title">#Раклечится</h2>
      <button class="head-banner__button">Рассказать историю</button>
      <button class="head-banner__button-arrow"></button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.head-banner {
  min-height: 689px;
  padding: 0 60px 40px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: center;
  background-color: $mainColor;
  font-family: 'Inter', monospace;
}

.head-banner__title {
  margin: 0 0 30px;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}

.head-banner__button {
  @extend %button-default;
  min-height: 60px;
  margin: 0 auto 192px;
  padding: 0 45px;
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  border-radius: 30px;
  border: 1.5px solid #ffffff;
  color: #ffffff;
}

.head-banner__button-arrow {
  @extend %button-default;
  width: 36px;
  height: 12px;
  margin: 0 auto;
  padding: 0;
  display: block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13 1 1' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
}

@media screen and (max-width: 1280px) {
  .head-banner {
    max-width: 1440px;
    min-height: 620px;
    padding: 0 50px 40px;
  }

  .head-banner__title {
    font-size: 78px;
    line-height: 94px;
  }

  .head-banner__button {
    min-height: 58px;
    margin: 0 auto 167px;
    font-size: 22px;
  }
}

@media screen and (max-width: 1024px) {
  .head-banner {
    min-height: 540px;
  }

  .head-banner__title {
    font-size: 78px;
    line-height: 94px;
  }

  .head-banner__button {
    min-height: 56px;
    margin: 0 auto 133px;
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .head-banner {
    min-height: 780px;
    padding: 0 40px 40px;
  }

  .head-banner__title {
    font-size: 64px;
    line-height: 77px;
  }

  .head-banner__button {
    margin: 0 auto 257px;
  }
}

@media screen and (max-width: 600px) {
  .head-banner {
    min-height: 480px;
    padding: 0 0 30px;
  }

  .head-banner__title {
    font-size: 48px;
    line-height: 58px;
  }

  .head-banner__button {
    margin: 0 auto 145px;
  }
}

@media screen and (max-width: 425px) {
  .head-banner {
    padding: 0 15px 40px;
  }

  .head-banner__title {
    margin: 0 0 20px;
    font-size: 36px;
    line-height: 44px;
  }

  .head-banner__button {
    min-height: 44px;
    margin: 0 auto 145px;
    padding: 0 30px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
