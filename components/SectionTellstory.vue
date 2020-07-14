<template>
  <section class="section-tellstory">
    <ui-title class="section-tellstory__title">
      {{ getTitle }}
    </ui-title>
    <div class="section-tellstory__container">
      <ui-subtitle class="section-tellstory__subtitle">
        {{ getSubtitle }}
      </ui-subtitle>
      <div class="section-tellstory__box">
        <div class="section-tellstory__controls">
          <button
            class="section-tellstory__control section-tellstory__control_is-active"
            ref="firstButton"
            @click="toggleIsActive"
          >
            {{ firstControlName }}
          </button>
          <button
            class="section-tellstory__control"
            ref="secondButton"
            @click="toggleIsActive"
          >
            {{ lastControlName }}
          </button>
        </div>
        <div class="section-tellstory__inner">
          <div
            class="section-tellstory__description"
            v-html="getDescription"
          ></div>
          <div class="section-tellstory__button-wrapper">
            <ui-button-middle
              class="section-tellstory__button-middle"
              v-if="firstButton"
              @theClick="openFormQuestions"
            >
              {{ firstButtonName }}
            </ui-button-middle>
            <ui-button-middle
              class="section-tellstory__button-middle"
              v-if="secondButton"
              @theClick="openFormContacts"
            >
              {{ secondButtonName }}
            </ui-button-middle>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import ButtonMiddle from '@/components/ui/ButtonMiddle';

export default {
  components: {
    'ui-title': Title,
    'ui-subtitle': Subtitle,
    'ui-button-middle': ButtonMiddle,
  },

  data() {
    return {
      firstButton: true,
      secondButton: false,
      firstControlName: '1-й вариант',
      lastControlName: '2-й вариант',
      firstButtonName: 'Заполнить форму',
      secondButtonName: 'Оставить контакт',
    };
  },

  computed: {
    getTitle() {
      return this.$store.getters['sectionTellstory/getTitle'];
    },
    getSubtitle() {
      return this.$store.getters['sectionTellstory/getSubtitle'];
    },
    getDescription() {
      if (this.firstButton) {
        return this.$store.getters['sectionTellstory/getFirstDescription'];
      }

      if (this.secondButton) {
        return this.$store.getters['sectionTellstory/getSecondDescription'];
      }
    },
  },

  methods: {
    toggleIsActive(event) {
      if (
        !event.target.classList.contains('section-tellstory__control_is-active')
      ) {
        this.$refs.firstButton.classList.toggle(
          'section-tellstory__control_is-active'
        );
        this.$refs.secondButton.classList.toggle(
          'section-tellstory__control_is-active'
        );
        this.firstButton = !this.firstButton;
        this.secondButton = !this.firstButton;
      }
    },

    openFormQuestions() {
      this.$store.commit('formQuestions/setPopupState');
    },

    openFormContacts() {
      this.$store.commit('formContacts/setPopupState');
    },
  },
};
</script>

<style lang="scss" scoped>
.section-tellstory {
  max-width: 1440px;
  padding: 100px 60px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.section-tellstory__title {
  margin: 0 0 32px;
}

.section-tellstory__container {
  display: flex;
  justify-content: space-between;
}

.section-tellstory__box {
  display: flex;
}

.section-tellstory__controls {
  margin: 0 40px 0 0;
}

.section-tellstory__control {
  @extend %button-default;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  transition: color linear 0.1s;
}

.section-tellstory__control:hover {
  color: #000000;
}

.section-tellstory__control:focus {
  outline: none;
  color: #000000;
}

.section-tellstory__control_is-active {
  font-weight: 500;
  color: #000000;
}

.section-tellstory__control:first-child {
  margin: 0 0 10px;
}

.section-tellstory__inner {
  min-height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.section-tellstory__inner /deep/ .section-tellstory__description {
  max-width: 633px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .section-tellstory {
    padding: 90px 50px;
  }

  .section-tellstory__inner /deep/ .section-tellstory__description {
    max-width: 570px;
  }
}

@media screen and (max-width: 1140px) {
  .section-tellstory__controls {
    margin: 0 30px 0 0;
  }

  .section-tellstory__inner /deep/ .section-tellstory__description {
    max-width: 470px;
  }
}

@media screen and (max-width: 1024px) {
  .section-tellstory {
    padding: 80px 50px;
  }

  .section-tellstory__title {
    margin: 0 0 20px;
  }

  .section-tellstory__inner /deep/ .section-tellstory__description {
    max-width: 447px;
    font-size: 15px;
    line-height: 19px;
  }

  .section-tellstory__control {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 940px) {
  .section-tellstory__container {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
  }

  .section-tellstory__box {
    flex-direction: column;
  }

  .section-tellstory__controls {
    margin: 0 0 30px;
    display: flex;
  }

  .section-tellstory__title {
    max-width: 380px;
    margin: 0 auto 26px;
  }

  .section-tellstory__subtitle {
    max-width: 380px;
    margin: 0 0 80px;
  }

  .section-tellstory__inner {
    min-height: 190px;
  }

  .section-tellstory__inner /deep/ .section-tellstory__description {
    max-width: 380px;
  }

  .section-tellstory__control:first-child {
    margin: 0 30px 0 0;
  }

  .section-tellstory__control_is-active {
    border-bottom: 1.5px solid $mainColor;
  }
}

@media screen and (max-width: 425px) {
  .section-tellstory {
    padding: 50px 15px;
  }

  .section-tellstory__container {
    align-items: unset;
  }

  .section-tellstory__controls {
    margin: 0 0 20px;
    display: flex;
  }

  .section-tellstory__title {
    margin: 0 0 16px;
  }

  .section-tellstory__subtitle {
    max-width: 300px;
    margin: 0 0 40px;
  }

  .section-tellstory__control {
    font-size: 13px;
    line-height: 19px;
  }

  .section-tellstory__inner {
    min-height: 170px;
  }

  .section-tellstory__inner /deep/ .section-tellstory__description {
    font-size: 13px;
    line-height: 16px;
  }

  .section-tellstory__control:first-child {
    margin: 0 20px 0 0;
  }
}

@media screen and (max-width: 375px) {
  .section-tellstory__middle-button {
    margin: 0 auto;
    display: block;
  }
}
</style>
