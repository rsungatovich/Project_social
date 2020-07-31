<template>
  <div class="slider">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="slide of getUIData.slides"
        :key="slide.id"
      >
        <iframe
          class="slider__player"
          :src="slide.video"
          v-if="!getUIData.isVisible"
        />
        <img
          class="slider__image"
          :src="slide.image"
          alt="Познер"
          v-if="getUIData.isVisible"
        />
        <button
          class="slider__button-play"
          v-if="getUIData.isVisible"
          @click="setPropertiesData('isVisible', false)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getUIData() {
      return this.$store.getters['ui-slider/getData'];
    },
  },

  methods: {
    setPropertiesData(prop, value) {
      this.$store.commit('ui-slider/setPropertiesData', { prop, value });
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 100%;
}

.slider__player {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

.slider__image {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
  object-position: center;
}

.slider__button-play {
  @extend %button-default;
  width: 90px;
  height: 90px;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  position: absolute;
  border-radius: 50%;
  background-position: 5px;
  background-color: #cecece;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.356 25.677l38.625 22.3c1.557.899 1.557 3.147 0 4.046l-38.625 22.3c-1.557.899-3.504-.225-3.504-2.023V27.7c0-1.798 1.946-2.922 3.504-2.023z'/%3E%3Cpath d='M69.981 47.977l-38.625-22.3a2.343 2.343 0 00-.716-.259l37.341 21.559c1.557.899 1.557 3.147 0 4.046l-38.625 22.3a2.296 2.296 0 01-1.078.301c.656.938 1.961 1.343 3.078.699l38.625-22.3c1.557-.899 1.557-3.147 0-4.046z'/%3E%3Cpath d='M31.356 25.677l38.625 22.3c1.557.899 1.557 3.147 0 4.046l-38.625 22.3c-1.557.899-3.504-.225-3.504-2.023V27.7c0-1.798 1.946-2.922 3.504-2.023z' fill='%23ffffff' stroke='%23ffffff' stroke-miterlimit='10'/%3E%3C/svg%3E");
  transition: background 0.2s linear;
  z-index: 1;
}

.slider__button-play:focus {
  outline: none;
}

.slider__button-play:hover {
  background-color: $mainColor;
}

@media screen and (max-width: 1280px) {
  .slider__button-play {
    width: 76px;
    height: 76px;
    top: calc(50% - 38px);
    left: calc(50% - 38px);
  }
}

@media screen and (max-width: 530px) {
  .slider__button-play {
    width: 38px;
    height: 38px;
    top: calc(50% - 19px);
    left: calc(50% - 19px);
    background-position: 3px;
  }
}
</style>
