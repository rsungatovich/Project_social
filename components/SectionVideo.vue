<template>
  <section class="section-video">
    <div class="section-video__box section-video__box_left">
      <ui-title class="section-video__title">
        {{ getSectionData.title }}
      </ui-title>
      <ui-subtitle class="section-video__subtitle">
        {{ getSectionData.subtitle }}
      </ui-subtitle>
      <button
        class="section-video__button section-video__button_left"
        @click="prevSwipe"
      ></button>
      <button
        class="section-video__button section-video__button_right"
        @click="nextSwipe"
      ></button>
    </div>
    <div class="section-video__box section-video__box_right">
      <div class="section-video__inner" ref="videoInner">
        <ui-slider class="section-video__slider" v-swiper:swiper></ui-slider>
        <div class="section-video__mob-buttons">
          <button
            class="section-video__button-mob section-video__button-mob_left"
            @click="prevSwipe"
          ></button>
          <button
            class="section-video__button-mob section-video__button-mob_right"
            @click="nextSwipe"
          ></button>
        </div>
      </div>
      <p class="section-video__excerpt">
        Все видео вы можете найте на нашем
        <a
          class="section-video__link"
          target="_blank"
          href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
        >
          YouTube канале.
        </a>
      </p>
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import Slider from '@/components/ui/Slider';

export default {
  components: {
    'ui-title': Title,
    'ui-subtitle': Subtitle,
    'ui-slider': Slider,
  },

  computed: {
    getSectionData() {
      return this.$store.getters['sectionVideo/getData'];
    },
  },

  methods: {
    prevSwipe() {
      this.swiper.slidePrev(500, true);
      this.setVisibleState(true);
    },
    nextSwipe() {
      this.swiper.slideNext(500, true);
      this.setVisibleState(true);
    },
    setVisibleState(boolean) {
      this.$store.commit('ui-slider/setVisibleState', { boolean });
    },
  },
};
</script>

<style lang="scss" scoped>
.section-video {
  max-width: 1440px;
  display: flex;
  padding: 100px 60px 74px;
  box-sizing: border-box;
  justify-content: space-between;
  font-family: 'Inter', monospace;
}

.section-video__title {
  margin: 10px 0 30px;
}

.section-video__subtitle {
  margin: 0 0 150px;
}

.section-video__button {
  @extend %button-default;
  width: 40px;
  height: 40px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: $mainColor;
  transition: opacity linear 0.2s;
}

.section-video__button:hover {
  opacity: 0.6;
}

.section-video__button:focus {
  outline: none;
}

.section-video__button_left {
  background-position: 9px;
  background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M87.5 111l-47-47M40.5 64l47-47'/%3E%3C/g%3E%3C/svg%3E");
}

.section-video__button_right {
  transform: translateX(-5px);
  background-position: 11px;
  background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M40.5 17l47 47M87.5 64l-47 47'/%3E%3C/g%3E%3C/svg%3E");
}

.section-video__mob-buttons {
  width: 100%;
  top: calc(50% - 20px);
  left: 0;
  display: none;
  position: absolute;
  justify-content: space-between;
}

.section-video__button-mob {
  @extend %button-default;
  width: 40px;
  height: 40px;
  z-index: 1;
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: $mainColor;
  transition: opacity linear 0.2s;
}

.section-video__button-mob:hover {
  opacity: 0.6;
}

.section-video__button-mob:focus {
  outline: none;
}

.section-video__button-mob_left {
  transform: translateX(-54px);
  background-position: 9px;
  background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M87.5 111l-47-47M40.5 64l47-47'/%3E%3C/g%3E%3C/svg%3E");
}

.section-video__button-mob_right {
  transform: translateX(54px);
  background-position: 11px;
  background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M40.5 17l47 47M87.5 64l-47 47'/%3E%3C/g%3E%3C/svg%3E");
}

.section-video__box_right {
  width: 65.6818%;
}

.section-video__inner {
  width: 100%;
  position: relative;
  padding-bottom: 51.9%;
  height: 0;
}

.section-video__slider {
  top: 0;
  left: 0;
  position: absolute;
}

.section-video__excerpt {
  margin: 10px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

.section-video__link {
  color: #666666;
  border-bottom: 1px solid #666666;
  text-decoration: none;
  transition: opacity linear 0.2s;
}

.section-video__link:hover {
  opacity: 0.6;
}

.section-video__link:focus {
  outline: none;
}

@media screen and (max-width: 1280px) {
  .section-video {
    padding: 90px 50px 64px;
  }

  .section-video__inner {
    padding-bottom: 51.7%;
  }

  .section-video__subtitle {
    margin: 0 0 124px;
  }
}

@media screen and (max-width: 1024px) {
  .section-video {
    padding: 80px 50px 54px;
  }

  .section-video__inner {
    padding-bottom: 51.7%;
  }

  .section-video__title {
    margin: 10px 0 20px;
  }

  .section-video__subtitle {
    margin: 0 0 80px;
  }
}

@media screen and (max-width: 768px) {
  .section-video {
    padding: 80px 40px 44px;
    display: block;
  }

  .section-video__box_right {
    width: 84.302325581%;
    margin: auto;
  }

  .section-video__title {
    text-align: center;
    margin: 0 auto 26px;
  }

  .section-video__subtitle {
    margin: 0 auto 60px;
  }

  .section-video__button {
    display: none;
  }

  .section-video__mob-buttons {
    display: flex;
  }

  .section-video__excerpt {
    margin: 20px 0 0;
  }
}

@media screen and (max-width: 530px) {
  .section-video {
    padding: 50px 40px 50px;
  }

  .section-video__box_right {
    width: 100%;
  }

  .section-video__title {
    max-width: 290px;
    margin: 0 0 16px;
    text-align: unset;
  }

  .section-video__subtitle {
    max-width: 290px;
    margin: 0 0 40px;
  }

  .section-video__button-mob_left {
    transform: none;
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23cecece' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M87.5 111l-47-47M40.5 64l47-47'/%3E%3C/g%3E%3C/svg%3E");
  }

  .section-video__button-mob_right {
    transform: none;
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23cecece' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M40.5 17l47 47M87.5 64l-47 47'/%3E%3C/g%3E%3C/svg%3E");
  }

  .section-video__excerpt {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .section-video {
    padding: 50px 15px 50px;
  }
}

@media screen and (max-width: 375px) {
  .section-video__button-mob_left {
    transform: translateX(-10px);
  }

  .section-video__button-mob_right {
    transform: translateX(10px);
  }
}
</style>
