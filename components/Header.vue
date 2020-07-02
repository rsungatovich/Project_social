<template>
  <header class="header">
    <h1 class="header__title" v-if="$route.path !== '/'">
      <nuxt-link to="/" class="header__title-link">
        {{ title }}
      </nuxt-link>
    </h1>
    <h1 class="header__title" v-else>
      {{ title }}
    </h1>
    <nav class="header__navigation">
      <nuxt-link
        to="/"
        class="header__link is-active"
        v-if="$route.path === '/'"
      >
        Главная
      </nuxt-link>
      <nuxt-link to="/" class="header__link" v-if="$route.path !== '/'">
        Главная
      </nuxt-link>
      <nuxt-link
        to="/stories"
        class="header__link is-active"
        v-if="$route.path === '/stories'"
      >
        Истории
      </nuxt-link>
      <nuxt-link
        to="/stories"
        class="header__link"
        v-if="$route.path !== '/stories'"
      >
        Истории
      </nuxt-link>
      <button class="header__button" @click="$emit('theClick')">
        Рассказать историю
      </button>
      <button class="header__mobile-bar"></button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'Проект Благотворительного Фонда Константина Хабенского',
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 1440px;
  padding: 18px 60px;
  display: flex;
  box-sizing: border-box;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__link {
  margin-right: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
}

.is-active {
  border-bottom: 1px solid black;
}

.header__button {
  @extend %button-default;
  height: 44px;
  padding: 0 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: $mainColor;
}

.header__mobile-bar {
  @extend %button-default;
  width: 32px;
  height: 32px;
  margin: 0;
  display: none;
  background-size: cover;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M0 0h32v4H0zM0 14h32v4H0zM0 28h32v4H0z'/%3E%3C/svg%3E");
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 18px 50px;
  }
}

@media screen and (max-width: 1024px) {
  .header__link {
    margin-right: 30px;
  }
}

@media screen and (max-width: 850px) {
  .header__link {
    margin-right: 20px;
  }

  .header__button {
    padding: 0 12px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: 18px 40px;
  }

  .header__link {
    display: none;
  }

  .header__button {
    display: none;
  }

  .header__mobile-bar {
    display: block;
  }
}

@media screen and (max-width: 425px) {
  .header {
    padding: 18px 15px;
  }

  .header__title {
    font-size: 12px;
    line-height: 14px;
  }

  .header__mobile-bar {
    width: 26px;
    height: 26px;
  }
}
</style>
