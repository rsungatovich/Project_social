<template>
  <section class="head-banner">
    <div class="head-banner__container">
      <h2 class="head-banner__title">{{ getTitle }}</h2>
      <button class="head-banner__button" @click="openPopup">
        {{ buttonName }}
      </button>
    </div>
    <button class="head-banner__button-arrow" @click="scrollTo"></button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttonName: 'Рассказать историю',
    };
  },

  props: ['scrollTo'],

  computed: {
    getTitle() {
      return this.$store.getters['headBanner/getTitle'];
    },
  },

  methods: {
    openPopup() {
      this.$store.commit('formQuestions/setPopupState');
    },
  },
};
</script>

<style lang="scss" scoped>
.head-banner {
  min-height: calc(100vh - 80px);
  padding: 0 60px 40px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  background-color: $mainColor;
  font-family: 'Inter', monospace;
}

.head-banner__container {
  height: 100%;
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
  margin: 0 auto;
  padding: 0 45px;
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  border-radius: 30px;
  border: 1.5px solid #ffffff;
  color: #ffffff;
  transition: opacity linear 0.1s;
}

.head-banner__button:hover {
  opacity: 0.6;
}

.head-banner__button:focus {
  outline: none;
  opacity: 0.6;
}

.head-banner__button-arrow {
  @extend %button-default;
  width: 40px;
  height: 20px;
  bottom: 40px;
  left: calc(50% - 20px);
  margin: 0 auto;
  padding: 0;
  display: block;
  position: absolute;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13 1 1' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
  transition: opacity linear 0.1s;
}

.head-banner__button-arrow:hover {
  opacity: 0.3;
}

.head-banner__button-arrow:focus {
  outline: none;
  opacity: 0.6;
}

@media screen and (max-width: 1280px) {
  .head-banner {
    max-width: 1440px;
    padding: 0 50px 40px;
  }

  .head-banner__title {
    font-size: 78px;
    line-height: 94px;
  }

  .head-banner__button {
    min-height: 58px;
    font-size: 22px;
  }
}

@media screen and (max-width: 1024px) {
  .head-banner__title {
    font-size: 78px;
    line-height: 94px;
  }

  .head-banner__button {
    min-height: 56px;
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .head-banner {
    min-height: calc(100vh - 76px);
    padding: 0 40px 40px;
  }

  .head-banner__title {
    font-size: 64px;
    line-height: 77px;
  }
}

@media screen and (max-width: 600px) {
  .head-banner {
    padding: 0 0 30px;
  }

  .head-banner__title {
    font-size: 48px;
    line-height: 58px;
  }
}

@media screen and (max-width: 425px) {
  .head-banner {
    min-height: calc(100vh - 61px);
    padding: 0 15px 40px;
  }

  .head-banner__title {
    margin: 0 0 20px;
    font-size: 36px;
    line-height: 44px;
  }

  .head-banner__button {
    min-height: 44px;
    padding: 0 30px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
