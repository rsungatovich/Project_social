<template>
  <section class="head-banner">
    <div class="head-banner__image"></div>
    <video
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      class="head-banner__video"
    >
      <source src="../static/videos/headVideo.mp4" type="video/mp4" />
    </video>
    <h2 class="head-banner__title">{{ getTitle }}</h2>
    <button class="head-banner__button" @click="openPopup">
      {{ buttonName }}
    </button>
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
  font-family: 'Inter', monospace;
}

.head-banner__video {
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.head-banner__image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('../static/images/headCover.png');
  opacity: 0.8;
  z-index: 1;
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
  z-index: 1;
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
  transition: background linear 0.2s;
  z-index: 1;
}

.head-banner__button:hover {
  background-color: #613a939d;
}

.head-banner__button:focus {
  outline: none;
  background-color: $mainColor;
}

.head-banner__button-arrow {
  @extend %button-default;
  width: 40px;
  height: 20px;
  bottom: 40px;
  left: calc(50% - 20px);
  margin: 0 auto;
  padding: 0;
  z-index: 1;
  display: block;
  position: absolute;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13 1 1' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
  transition: opacity linear 0.2s;
}

.head-banner__button-arrow:hover {
  opacity: 0.3;
}

.head-banner__button-arrow:focus {
  outline: none;
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
