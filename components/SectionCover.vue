<template>
  <section class="section-cover">
    <div class="section-cover__image"></div>
    <video
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      class="section-cover__video"
    >
      <source src="../static/videos/headVideo.mp4" type="video/mp4" />
    </video>
    <h2 class="section-cover__title">{{ getSectionData.title }}</h2>
    <button class="section-cover__button" @click="toggleFormQuestionsState">
      {{ getSectionData.buttonName }}
    </button>
    <button class="section-cover__button-arrow" @click="scrollTo"></button>
  </section>
</template>

<script>
export default {
  props: ['scrollTo'],

  computed: {
    getSectionData() {
      return this.$store.getters['sectionCover/getData'];
    },
  },

  methods: {
    toggleFormQuestionsState() {
      this.$store.commit('uiFormQuestions/toggleState');
    },
  },
};
</script>

<style lang="scss" scoped>
.section-cover {
  min-height: calc(100vh - 80px);
  padding: 0 60px 40px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  font-family: 'Inter', monospace;
}

.section-cover__video {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  position: absolute;
  object-fit: cover;
  object-position: center;
}

.section-cover__image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('../static/images/headCover.png');
  opacity: 0.8;
  z-index: 1;
}

.section-cover__title {
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

.section-cover__button {
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

.section-cover__button:hover {
  background-color: #613a939d;
}

.section-cover__button:focus {
  outline: none;
  background-color: $mainColor;
}

.section-cover__button-arrow {
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

.section-cover__button-arrow:hover {
  opacity: 0.3;
}

.section-cover__button-arrow:focus {
  outline: none;
}

@media screen and (max-width: 1280px) {
  .section-cover {
    max-width: 1440px;
    padding: 0 50px 40px;
  }

  .section-cover__title {
    font-size: 78px;
    line-height: 94px;
  }

  .section-cover__button {
    min-height: 58px;
    font-size: 22px;
  }
}

@media screen and (max-width: 1024px) {
  .section-cover__title {
    font-size: 78px;
    line-height: 94px;
  }

  .section-cover__button {
    min-height: 56px;
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .section-cover {
    min-height: calc(100vh - 76px);
    padding: 0 40px 40px;
  }

  .section-cover__title {
    font-size: 64px;
    line-height: 77px;
  }
}

@media screen and (max-width: 600px) {
  .section-cover {
    padding: 0 0 30px;
  }

  .section-cover__title {
    font-size: 48px;
    line-height: 58px;
  }
}

@media screen and (max-width: 425px) {
  .section-cover {
    min-height: calc(100vh - 61px);
    padding: 0 15px 40px;
  }

  .section-cover__title {
    margin: 0 0 20px;
    font-size: 36px;
    line-height: 44px;
  }

  .section-cover__button {
    min-height: 44px;
    padding: 0 30px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
