<template>
  <header class="header">
    <h1 class="header__title">
      <nuxt-link to="/" class="header__title-link">
        Проект Благотворительного Фонда Константина Хабенского
      </nuxt-link>
    </h1>
    <nav class="header__navigation">
      <nuxt-link to="/" class="header__link">Главная</nuxt-link>
      <nuxt-link to="/" class="header__link">Истории</nuxt-link>
      <button class="header__button">Рассказать историю</button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  font-family: 'Inter', monospace;
}

.header__title {
  max-width: 295px;
  margin: 0;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.header__title-link {
  margin: 0;
  color: inherit;
  text-decoration: none;
}

.header__navigation {
  width: 436px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
}

.header__button {
  height: 44px;
  padding: 0 24px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #ffffff;
  background-color: $mainColor;
}
</style>