<template>
  <section class="section-tellstory">
    <window class="section-tellstory__window">
      <ui-title class="section-tellstory__title">
        Расскажите свою историю
      </ui-title>
      <div class="section-tellstory__container">
        <ui-subtitle class="section-tellstory__subtitle">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </ui-subtitle>
        <div class="section-tellstory__box">
          <div class="section-tellstory__controls">
            <button
              class="section-tellstory__control section-tellstory__control_is-active"
            >
              1-й вариант
            </button>
            <button class="section-tellstory__control">
              2-й вариант
            </button>
          </div>
          <div class="section-tellstory__inner">
            <p class="section-tellstory__description">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </p>
            <middle-button>
              Заполнить форму
            </middle-button>
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
import MiddleButton from '@/components/ui/MiddleButton';

export default {
  components: {
    window: Window,
    'ui-title': Title,
    'ui-subtitle': Subtitle,
    'middle-button': MiddleButton,
  },
};
</script>

<style lang="scss" scoped>
.section-tellstory {
  padding: 100px 0;
  font-family: 'Inter', monospace;
}

.section-tellstory__title {
  margin-bottom: 32px;
}

.section-tellstory__container {
  display: flex;
  justify-content: space-between;
}

.section-tellstory__box {
  display: flex;
}

.section-tellstory__controls {
  margin-right: 40px;
}

.section-tellstory__control {
  @extend %button-default;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
}

.section-tellstory__control_is-active {
  font-weight: 500;
  color: #000000;
}

.section-tellstory__control:first-child {
  margin-bottom: 10px;
}

.section-tellstory__description {
  max-width: 633px;
  margin: 0 0 78px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
</style>
