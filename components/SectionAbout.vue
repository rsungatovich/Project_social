<template>
  <section class="section-about">
    <div class="section-about__content">
      <p class="section-about__heading">
        {{ getHeading }}
      </p>
      <ui-title class="section-about__title section-about__title_theme_main">
        {{ getTitle }}
      </ui-title>
      <div class="section-about__container">
        <div class="section-about__wrapper">
          <ui-subtitle
            class="section-about__subtitle section-about__subtitle_theme_main"
          >
            {{ getSubtitle }}
          </ui-subtitle>
          <button class="section-about__button" @click="openPopup">
            {{ buttonName }}
          </button>
          <img
            class="section-about__image section-about__image_first"
            src="/images/ill1.png"
            alt="Узоры"
          />
        </div>
        <div class="section-about__box">
          <div class="section-about__controls">
            <button
              class="section-about__control section-about__control_is-active"
              ref="firstButton"
              @click="toggleIsActive"
            >
              {{ firstControlName }}
            </button>
            <button
              class="section-about__control"
              ref="secondButton"
              @click="toggleIsActive"
            >
              {{ lastControlName }}
            </button>
          </div>
          <div class="section-about__description">
            <p
              class="section-about__text"
              v-for="paragraph of getDescription"
              :key="paragraph.id"
            >
              {{ paragraph.text }}
            </p>
          </div>
          <button class="section-about__button-mob" @click="openPopup">
            {{ buttonName }}
          </button>
          <img
            class="section-about__image section-about__image_first-mob"
            src="/images/ill1.png"
            alt="Узоры"
          />
        </div>
      </div>
      <img
        class="section-about__image section-about__image_second"
        src="/images/ill2.png"
        alt="Узоры"
      />
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
      firstButton: true,
      secondButton: false,
      firstControlName: 'Рак Лечится',
      lastControlName: 'Фонд Хабенского',
      buttonName: 'Рассказать историю',
    };
  },

  computed: {
    getHeading() {
      return this.$store.getters['sectionAbout/getHeading'];
    },
    getTitle() {
      return this.$store.getters['sectionAbout/getTitle'];
    },
    getSubtitle() {
      return this.$store.getters['sectionAbout/getSubtitle'];
    },
    getDescription() {
      if (this.firstButton) {
        return this.$store.getters['sectionAbout/getDescription'][0].paragraphs;
      }

      if (this.secondButton) {
        return this.$store.getters['sectionAbout/getDescription'][1].paragraphs;
      }
    },
  },

  methods: {
    toggleIsActive(event) {
      if (
        !event.target.classList.contains('section-about__control_is-active')
      ) {
        this.$refs.firstButton.classList.toggle(
          'section-about__control_is-active'
        );
        this.$refs.secondButton.classList.toggle(
          'section-about__control_is-active'
        );
        this.firstButton = !this.firstButton;
        this.secondButton = !this.firstButton;
      }
    },

    openPopup() {
      this.$store.commit('formQuestions/setPopupState');
    },
  },
};
</script>

<style lang="scss" scoped>
.section-about {
  background-color: $mainColor;
  font-family: 'Inter', monospace;
}

.section-about__content {
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 90px 60px 100px;
  position: relative;
  box-sizing: border-box;
}

.section-about__heading {
  margin: 0 auto 70px;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}

.section-about__title {
  margin: 0 0 32px;
}

.section-about__title_theme_main {
  color: #ffffff;
}

.section-about__container {
  display: flex;
  justify-content: space-between;
}

.section-about__subtitle {
  max-width: 320px;
  margin: 0 0 32px;
}

.section-about__subtitle_theme_main {
  color: #dedede;
}

.section-about__button {
  @extend %button-default;
  min-height: 44px;
  padding: 0 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  z-index: 1;
  color: #000000;
  position: relative;
  background-color: #ffffff;
  transition: opacity linear 0.1s;
}

.section-about__button:hover {
  opacity: 0.8;
}

.section-about__button:focus {
  outline: none;
}

.section-about__button-mob {
  @extend %button-default;
  min-height: 38px;
  margin: 0 auto;
  padding: 0 24px;
  display: none;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  background-color: #ffffff;
  transition: opacity linear 0.1s;
}

.section-about__button-mob:hover {
  opacity: 0.8;
}

.section-about__button-mob:focus {
  outline: none;
}

.section-about__box {
  display: flex;
}

.section-about__controls {
  min-width: 130px;
  margin: 0 40px 0 0;
  z-index: 1;
}

.section-about__control {
  @extend %button-default;
  width: 100%;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #c9c9c9;
  text-align: right;
  transition: color linear 0.1s;
}

.section-about__control:hover {
  color: #ffffff;
}

.section-about__control:focus {
  outline: none;
}

.section-about__control_is-active {
  font-weight: 500;
  color: #ffffff;
}

.section-about__control:first-child {
  margin: 0 0 10px;
}

.section-about__description {
  min-height: 245px;
}

.section-about__text {
  max-width: 640px;
  margin: 0 0 25px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.section-about__text:last-child {
  margin: 0;
}

.section-about__image_first {
  margin: 70px 0 0;
  display: block;
}

.section-about__image_second {
  right: 60px;
  bottom: 60px;
  position: absolute;
}

.section-about__image_first-mob {
  width: 136px;
  height: 96px;
  margin: 50px auto 0;
  display: none;
}

@media screen and (max-width: 1280px) {
  .section-about__content {
    padding: 80px 50px 90px;
  }

  .section-about__description {
    max-width: 570px;
    min-height: 267px;
  }

  .section-about__heading {
    margin: 0 auto 60px;
    font-size: 58px;
    line-height: 70px;
  }

  .section-about__title {
    margin: 0 0 30px;
  }

  .section-about__subtitle {
    max-width: 230px;
    margin: 0 0 30px;
  }

  .section-about__button {
    min-height: 42px;
  }

  .section-about__image_first {
    width: 218px;
    height: 155px;
  }

  .section-about__image_second {
    width: 852px;
    height: 292px;
    right: 50px;
    bottom: 50px;
  }
}

@media screen and (max-width: 1180px) {
  .section-about__image_first {
    width: 167px;
    height: 118px;
  }

  .section-about__image_second {
    width: 657px;
    height: 227px;
  }
}

@media screen and (max-width: 1110px) {
  .section-about__content {
    padding: 80px 50px 80px;
  }

  .section-about__heading {
    margin: 0 auto 46px;
    font-size: 52px;
    line-height: 63px;
  }

  .section-about__wrapper {
    min-width: 230px;
  }

  .section-about__controls {
    margin: 0 30px 0 0;
  }

  .section-about__control {
    font-size: 15px;
    line-height: 19px;
  }

  .section-about__description {
    max-width: 447px;
    min-height: 248px;
  }

  .section-about__subtitle {
    max-width: 200px;
  }

  .section-about__text {
    margin: 0 0 20px;
    font-size: 15px;
    line-height: 19px;
  }

  .section-about__button {
    min-height: 38px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 768px) {
  .section-about__content {
    padding: 80px 40px 80px;
  }

  .section-about__container {
    display: block;
  }

  .section-about__heading {
    display: none;
  }

  .section-about__title {
    margin: 0 auto 26px;
    text-align: center;
  }

  .section-about__wrapper {
    max-width: 380px;
    min-width: unset;
    margin: 0 auto 80px;
  }

  .section-about__subtitle {
    width: 100%;
    margin: 0;
    max-width: unset;
  }

  .section-about__button {
    display: none;
  }

  .section-about__box {
    max-width: 380px;
    margin: 0 auto;
    display: block;
  }

  .section-about__description {
    margin: 0 0 80px;
    min-height: 286px;
  }

  .section-about__controls {
    margin: 0 0 30px;
  }

  .section-about__control {
    width: auto;
    display: inline-block;
    text-align: unset;
  }

  .section-about__control_is-active {
    font-weight: 500;
    color: #ffffff;
    border-bottom: 1.5px solid #ffffff;
  }

  .section-about__control:first-child {
    margin: 0 30px 0 0;
  }

  .section-about__button-mob {
    display: block;
  }

  .section-about__image_first {
    display: none;
  }

  .section-about__image_second {
    display: none;
  }

  .section-about__image_first-mob {
    width: 198px;
    height: 139px;
    display: block;
    margin: 60px auto 0;
  }
}

@media screen and (max-width: 425px) {
  .section-about__content {
    padding: 50px 15px;
  }

  .section-about__title {
    margin: 0 0 16px;
    text-align: unset;
  }

  .section-about__wrapper {
    margin: 0 0 40px;
  }

  .section-about__box {
    max-width: unset;
    margin: 0;
  }

  .section-about__controls {
    margin: 0 0 20px;
  }

  .section-about__control:first-child {
    margin: 0 20px 0 0;
  }

  .section-about__description {
    margin: 0 0 50px;
    min-height: 267px;
  }

  .section-about__button-mob {
    min-height: 31px;
    padding: 0 13px;
    font-size: 12px;
    line-height: 15px;
  }

  .section-about__image_first-mob {
    display: block;
  }
}

@media screen and (max-width: 375px) {
  .section-about__description {
    min-height: 305px;
  }
}

@media screen and (max-width: 320px) {
  .section-about__description {
    min-height: 381px;
  }
}
</style>
