<template>
  <section class="section-video">
    <div class="section-video__box section-video__box_left">
      <ui-title class="section-video__title">
        {{ getTitle }}
      </ui-title>
      <ui-subtitle class="section-video__subtitle">
        {{ getSubtitle }}
      </ui-subtitle>
      <button class="section-video__button section-video__button_left"></button>
      <button
        class="section-video__button section-video__button_right"
      ></button>
    </div>
    <div class="section-video__box section-video__box_right">
      <div class="section-video__inner" ref="videoInner">
        <img
          class="section-video__image"
          src="../static/images/Pozner1.jpg"
          alt="Познер"
          v-if="isVisible"
        />
        <button
          class="section-video__button-play"
          v-if="isVisible"
          @click="playVideo"
        ></button>
        <div class="section-video__mob-buttons">
          <button
            class="section-video__button-mob section-video__button-mob_left"
          ></button>
          <button
            class="section-video__button-mob section-video__button-mob_right"
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

export default {
  components: {
    'ui-title': Title,
    'ui-subtitle': Subtitle,
  },

  data() {
    return {
      isVisible: true,
    };
  },

  computed: {
    getTitle() {
      return this.$store.getters['sectionVideo/getTitle'];
    },
    getSubtitle() {
      return this.$store.getters['sectionVideo/getSubtitle'];
    },
  },

  methods: {
    playVideo() {
      this.isVisible = false;
      this.$refs.videoInner.insertAdjacentHTML(
        'afterbegin',
        `<iframe class="section-video__player" src="https://www.youtube.com/embed/ou60K0WfcJ0?fs=0&color=white&autoplay=1">`
      );
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
  transition: opacity linear 0.1s;
}

.section-video__button:hover {
  opacity: 0.9;
}

.section-video__button:focus {
  outline: none;
  opacity: 0.9;
}

.section-video__button_left {
  background-position: 9px;
  background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M87.5 111l-47-47M40.5 64l47-47'/%3E%3C/g%3E%3C/svg%3E");
}

.section-video__button_right {
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
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: $mainColor;
  transition: opacity linear 0.1s;
}

.section-video__button-mob:hover {
  opacity: 0.9;
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
  // overflow: hidden;
}

.section-video__inner /deep/ .section-video__player {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

.section-video__image {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}

.section-video__button-play {
  @extend %button-default;
  width: 90px;
  height: 90px;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  position: absolute;
  border-radius: 50%;
  background-position: 5px;
  background-color: #cececee0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.356 25.677l38.625 22.3c1.557.899 1.557 3.147 0 4.046l-38.625 22.3c-1.557.899-3.504-.225-3.504-2.023V27.7c0-1.798 1.946-2.922 3.504-2.023z'/%3E%3Cpath d='M69.981 47.977l-38.625-22.3a2.343 2.343 0 00-.716-.259l37.341 21.559c1.557.899 1.557 3.147 0 4.046l-38.625 22.3a2.296 2.296 0 01-1.078.301c.656.938 1.961 1.343 3.078.699l38.625-22.3c1.557-.899 1.557-3.147 0-4.046z'/%3E%3Cpath d='M31.356 25.677l38.625 22.3c1.557.899 1.557 3.147 0 4.046l-38.625 22.3c-1.557.899-3.504-.225-3.504-2.023V27.7c0-1.798 1.946-2.922 3.504-2.023z' fill='%23ffffff' stroke='%23ffffff' stroke-miterlimit='10'/%3E%3C/svg%3E");
  transition: background 0.1s linear;
  z-index: 1;
}

.section-video__button-play:focus {
  opacity: 0.8;
  outline: none;
  background-color: $mainColor;
}

.section-video__button-play:hover {
  opacity: 0.8;
  background-color: $mainColor;
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
  transition: opacity linear 0.1s;
}

.section-video__link:hover {
  opacity: 0.6;
}

.section-video__link:focus {
  outline: none;
  opacity: 0.6;
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

  .section-video__button-play {
    width: 76px;
    height: 76px;
    top: calc(50% - 38px);
    left: calc(50% - 38px);
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

  .section-video__button-play {
    width: 38px;
    height: 38px;
    top: calc(50% - 19px);
    left: calc(50% - 19px);
    background-position: 3px;
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
</style>
