<template>
  <section class="section-about">
    <window class="section-about__window">
      <div class="section-about__content">
        <p class="section-about__heading">
          #Раклечится
        </p>
        <ui-title class="section-about__title section-about__title_theme_main">
          О проекте
        </ui-title>
        <div class="section-about__container">
          <div class="section-about__wrapper">
            <ui-subtitle
              class="section-about__subtitle section-about__subtitle_theme_main"
            >
              Этот проект был создан благотворительным фондом Константина
              Хабенского.
            </ui-subtitle>
            <button class="section-about__button">
              Рассказать историю
            </button>
          </div>
          <div class="section-about__box">
            <div class="section-about__controls">
              <button
                class="section-about__control section-about__control_is-active"
              >
                Рак Лечится
              </button>
              <button class="section-about__control">
                Фонд&nbsp;Хабенского
              </button>
            </div>
            <div class="section-about__description">
              <p class="section-about__text">
                Есть вещи, которые не лечатся. Особенности характера, страстные
                увлечения, привычки, ставшие частью нашего «я», фобии, которые
                мы приобрели в детстве. Список можно продолжать до
                бесконечности, но одна болезнь в него точно не войдет. Эта
                болезнь — рак. Рак лечится, и лучшее доказательство — люди с их
                неизлечимыми особенностями, которые сумели победить рак.
              </p>
              <p class="section-about__text">
                Рак лечится — проект Благотворительного Фонда Константина
                Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
                изменить отношение людей к раку и заставить каждого поверить:
                онкологическое заболевание — это не приговор.
              </p>
            </div>
            <button class="section-about__button-mob">
              Рассказать историю
            </button>
          </div>
        </div>
      </div>
    </window>
  </section>
</template>

<script>
import Window from '@/components/Window';
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';

export default {
  components: {
    window: Window,
    'ui-title': Title,
    'ui-subtitle': Subtitle,
  },
};
</script>

<style lang="scss" scoped>
.section-about {
  padding: 90px 0 100px;
  background-color: $mainColor;
  font-family: 'Inter', monospace;
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
  color: #000000;
  background-color: #ffffff;
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
}

.section-about__box {
  display: flex;
}

.section-about__controls {
  margin: 0 40px 0 0;
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
}

.section-about__control_is-active {
  font-weight: 500;
  color: #ffffff;
}

.section-about__control:first-child {
  margin: 0 0 10px;
}

.section-about__text {
  max-width: 640px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.section-about__text:first-child {
  margin: 0 0 25px;
}

@media screen and (max-width: 1280px) {
  .section-about {
    padding: 80px 0 90px;
  }

  .section-about__description {
    max-width: 570px;
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
}

@media screen and (max-width: 1110px) {
  .section-about {
    padding: 80px 0 80px;
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
  }

  .section-about__subtitle {
    max-width: 200px;
  }

  .section-about__text {
    font-size: 15px;
    line-height: 19px;
  }

  .section-about__text:first-child {
    margin: 0 0 20px;
  }

  .section-about__button {
    min-height: 38px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 768px) {
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
}

@media screen and (max-width: 425px) {
  .section-about {
    padding: 50px 0;
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
  }

  .section-about__button-mob {
    min-height: 31px;
    padding: 0 13px;
    font-size: 12px;
    line-height: 15px;
  }
}

@media screen and (max-width: 320px) {
}
</style>
