<template>
  <popup @theClick="closePopup">
    <form
      class="form-questions"
      v-if="visibleForm"
      @submit.prevent="submitForm"
    >
      <div class="form-questions__box">
        <span class="form-questions__steps">
          {{ getForms[getCounter].step }}
        </span>
        <p class="form-questions__about">
          <span class="form-questions__headline">
            {{ getForms[getCounter].question }}
          </span>
          <span class="form-questions__description">
            {{ getForms[getCounter].description }}
          </span>
        </p>
      </div>
      <input
        class="form-questions__input"
        type="text"
        name="answer"
        ref="input"
        :value="getAnswers[getCounter]"
        placeholder="Напишите тут"
        required
      />
      <div class="form-questions__box form-questions__box_flex">
        <div class="form-questions__controls">
          <button
            class="form-questions__button-back"
            type="button"
            @click="backForm"
          >
            {{ buttonBack }}
          </button>
          <ui-button-small class="form-questions__button-small" type="submit">
            {{ buttonNext }}
          </ui-button-small>
        </div>
        <p class="form-questions__policy" v-if="visiblePolicy">
          Нажимая на кнопку «отправить», вы даете согласие на
          <a class="form-questions__link" href="/policy" target="_blank">
            обработку персональных данных</a
          >
        </p>
      </div>
    </form>
    <ui-popup-thanks v-if="visibleThanks" @theClick="$emit('theClick')" />
  </popup>
</template>

<script>
import Popup from '@/components/ui/Popup';
import PopupThanks from '@/components/ui/PopupThanks';
import ButtonSmall from '@/components/ui/ButtonSmall';

export default {
  components: {
    popup: Popup,
    'ui-popup-thanks': PopupThanks,
    'ui-button-small': ButtonSmall,
  },

  data() {
    return {
      visibleForm: true,
      visibleThanks: false,
      visiblePolicy: false,
      buttonNext: 'Далее',
      buttonBack: 'Назад',
      buttonType: 'button',
    };
  },

  computed: {
    getForms() {
      return this.$store.getters['formQuestions/getForms'];
    },
    getAnswers() {
      return this.$store.getters['formQuestions/getAnswers'];
    },
    getCounter() {
      return this.$store.getters['formQuestions/getCounter'];
    },
  },

  methods: {
    backForm() {
      if (this.getCounter > 1) {
        this.setCounter(this.getCounter - 1);
        this.formStatus();
      }
    },
    submitForm() {
      this.setAnswers();

      if (this.getCounter < 12) {
        this.setCounter(this.getCounter + 1);
        this.formStatus();
      } else {
        console.log('susses');
        this.setCounter(1);
        this.visibleForm = false;
        this.visibleThanks = true;
      }
    },
    formStatus() {
      if (this.getCounter === 12) {
        this.visiblePolicy = true;
        this.buttonName = 'Отправить';
        this.buttonType = 'submit';
      } else {
        this.visiblePolicy = false;
        this.buttonName = 'Далее';
        this.buttonType = 'button';
      }
    },
    closePopup() {
      this.$store.commit('formQuestions/setPopupState');
    },
    setAnswers() {
      return this.$store.commit('formQuestions/setAnswers', {
        name: this.getCounter,
        answer: this.$refs.input.value,
      });
    },
    setCounter(num) {
      return this.$store.commit('formQuestions/setCounter', {
        count: num,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-questions {
  width: 100%;
  min-height: 520px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
}

.form-questions__steps {
  margin: 0 0 40px;
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.form-questions__about {
  margin: 0 0 130px;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
}

.form-questions__headline {
  font-weight: 500;
  color: #000000;
}

.form-questions__description {
  font-weight: normal;
  color: #666666;
}

.form-questions__input {
  width: 100%;
  min-height: 52px;
  padding: 0 10px;
  top: calc(50% - 26px);
  left: 0;
  display: block;
  position: absolute;
  font-size: 18px;
  line-height: 24px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #afafaf;
}

.form-questions__input:focus {
  outline: none;
  border-bottom: 2px solid black;
}

.form-questions__box_flex {
  display: flex;
  align-items: center;
}

.form-questions__controls {
  display: flex;
}

.form-questions__button-back {
  @extend %button-default;
  margin: 0 30px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  transition: opacity linear 0.2s;
}

.form-questions__button-back:hover {
  opacity: 0.6;
}

.form-questions__button-back:focus {
  outline: none;
}

.form-questions__button-small {
  padding: 0 70px;
}

.form-questions__policy {
  margin: 0 0 0 30px;
  max-width: 378px;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}

.form-questions__link {
  color: #666666;
  transition: opacity linear 0.1s;
}

.form-questions__link:hover {
  opacity: 0.6;
}

.form-questions__link:focus {
  outline: none;
}

@media screen and (max-width: 1280px) {
  .form-questions {
    min-height: 440px;
  }

  .form-questions__steps {
    font-size: 28px;
    line-height: 32px;
  }

  .form-questions__about {
    margin: 0 0 76px;
    font-size: 16px;
    line-height: 22px;
  }

  .form-questions__input {
    min-height: 48px;
    font-size: 16px;
    line-height: 22px;
  }

  .form-questions__button-small {
    padding: 0 60px;
  }
}

@media screen and (max-width: 768px) {
  .form-questions__steps {
    font-size: 26px;
    line-height: 30px;
  }

  .form-questions__about {
    margin: 0 0 76px;
    font-size: 15px;
    line-height: 19px;
  }

  .form-questions__input {
    min-height: 46px;
    top: calc(50% - 80px);
    font-size: 15px;
    line-height: 19px;
  }

  .form-questions__box_flex {
    display: flex;
    align-items: unset;
    flex-direction: column;
    justify-content: space-between;
  }

  .form-questions__policy {
    max-width: unset;
    margin: 65px 0 0;
  }
}

@media screen and (max-width: 425px) {
  .form-questions__steps {
    margin: 0 0 30px;
    font-size: 18px;
    line-height: 21px;
  }

  .form-questions__about {
    margin: 0 0 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .form-questions__input {
    min-height: 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .form-questions__button-back {
    margin: 0 15px 0 0;
    font-size: 13px;
    line-height: 16px;
  }

  .form-questions__button-small {
    width: 100%;
    padding: 0;
  }

  .form-questions__policy {
    max-width: unset;
    margin: 32px 0 0;
    font-size: 11px;
    line-height: 13px;
  }
}
</style>
