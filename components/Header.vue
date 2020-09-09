<template>
  <header class="header">
    <nav
      :class="[
        'header__navigation-mob',
        { 'header__navigation-mob_active': getMenuData.visible },
      ]"
    >
      <nuxt-link to="/" class="header__link-mob">
        {{ getSectionData.buttonMain }}
      </nuxt-link>
      <nuxt-link to="/stories" class="header__link-mob">
        {{ getSectionData.buttonStories }}
      </nuxt-link>
      <button class="header__button-mob" @click="toggleFormQuestionsState">
        {{ getSectionData.buttonTellStory }}
      </button>
    </nav>
    <div class="header__container">
      <h1 class="header__title" v-if="$route.path !== '/'">
        <nuxt-link to="/" class="header__title-link">
          {{ getSectionData.title }}
        </nuxt-link>
      </h1>
      <h1 class="header__title" v-else>
        {{ getSectionData.title }}
      </h1>
      <nav class="header__navigation">
        <nuxt-link to="/" class="header__link">
          {{ getSectionData.buttonMain }}
        </nuxt-link>
        <nuxt-link to="/stories" class="header__link">
          {{ getSectionData.buttonStories }}
        </nuxt-link>
        <button class="header__button" @click="toggleFormQuestionsState">
          {{ getSectionData.buttonTellStory }}
        </button>
      </nav>
      <button
        class="header__mobile-bar"
        @click="toggleMobileMenuState"
      ></button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    getSectionData() {
      return this.$store.getters['sectionHeader/getData'];
    },
    getMenuData() {
      return this.$store.getters['uiMobileMenu/getData'];
    },
  },

  methods: {
    toggleFormQuestionsState() {
      this.$store.commit('uiFormQuestions/toggleState');
    },
    toggleMobileMenuState(prop, value) {
      this.$store.commit('uiMobileMenu/toggleState');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 1440px;
  padding: 18px 60px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.header__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__title {
  max-width: 290px;
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

.header__title-link:focus {
  outline: none;
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
  transition: opacity linear 0.2s;
}

.header__link:hover {
  opacity: 0.3;
}

.header__link:focus {
  outline: none;
}

.header__link.nuxt-link-exact-active {
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
  transition: opacity linear 0.2s;
}

.header__button:hover {
  opacity: 0.6;
}

.header__button:focus {
  outline: none;
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

.header__mobile-bar:focus {
  outline: none;
}

.header__navigation-mob {
  width: 100%;
  margin: -150px 0 24px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  transition: margin 0.2s linear;
}

.header__navigation-mob_active {
  margin: 0 0 24px;
}

.header__link-mob {
  max-width: 60px;
  margin: 0 0 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-decoration: none;
  transition: margin 0.2s linear;
}

.header__link-mob.nuxt-link-exact-active {
  text-decoration: underline;
}

.header__button-mob {
  @extend %button-default;
  max-width: 190px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background-color: $mainColor;
  transition: opacity linear 0.1s;
}

.header__button-mob:focus {
  outline: none;
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

  .header__navigation {
    display: none;
  }

  .header__mobile-bar {
    display: block;
  }

  .header__navigation-mob {
    display: flex;
  }
}

@media screen and (max-width: 425px) {
  .header {
    padding: 18px 15px;
  }

  .header__title {
    max-width: 270px;
    font-size: 12px;
    line-height: 14px;
  }

  .header__mobile-bar {
    width: 26px;
    height: 26px;
  }

  .header__navigation-mob {
    margin: -120px 0 18px 0;
  }

  .header__navigation-mob_active {
    margin: 0 0 18px;
  }

  .header__link-mob {
    margin: 0 0 18px;
    font-size: 13px;
    line-height: 16px;
  }

  .header__button-mob {
    max-width: 146px;
    height: 31px;
    font-size: 12px;
    line-height: 15px;
  }
}

@media screen and (max-width: 425px) {
  .header__title {
    max-width: 250px;
  }
}
</style>
