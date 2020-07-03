<template>
  <popup @theClick="$emit('theClick')">
    <form
      class="form-questions"
      v-if="visibleForm"
      @submit.prevent="submitForm"
    >
      <div class="form-questions__box">
        <span class="form-questions__steps">
          {{ forms[counter].step }}
        </span>
        <p class="form-questions__about">
          <span class="form-questions__headline">
            {{ forms[counter].question }}
          </span>
          <span class="form-questions__description">
            {{ forms[counter].description }}
          </span>
        </p>
      </div>
      <input
        class="form-questions__input"
        type="text"
        name="answer"
        ref="input"
        :value="answers[counter]"
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
            Назад
          </button>
          <ui-button-small class="form-questions__button-small" type="submit">
            {{ buttonName }}
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
      counter: 1,
      forms: {
        1: {
          step: 'Шаг 1 из 12',
          question: 'Как вас зовут?',
          description: '',
        },
        2: {
          step: 'Шаг 2 из 12',
          question: 'Было ли у вас онкологическое заболевание?',
          description:
            'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
        },
        3: {
          step: 'Шаг 3 из 12',
          question: 'Какие занятия приносят Вам наибольшее удовольствие?',
          description:
            'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
        },
        4: {
          step: 'Шаг 4 из 12',
          question:
            'На что, кроме семьи, быта и работы, Вы тратите свое время?',
          description: '',
        },
        5: {
          step: 'Шаг 5 из 12',
          question: 'Какие сильные увлечения у Вас есть?',
          description:
            'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
        },
        6: {
          step: 'Шаг 6 из 12',
          question:
            'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
          description: '',
        },
        7: {
          step: 'Шаг 7 из 12',
          question:
            'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
          description: 'Кроме необходимых, таких, как чистка зубов.',
        },
        8: {
          step: 'Шаг 8 из 12',
          question:
            'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
          description: '',
        },
        9: {
          step: 'Шаг 9 из 12',
          question: 'Что Вас успокаивает/умиротворяет лучше всего?',
          description: '',
        },
        10: {
          step: 'Шаг 10 из 12',
          question:
            'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
          description: '',
        },
        11: {
          step: 'Шаг 11 из 12',
          question: 'Как вы обычно проводите выходные?',
          description: '',
        },
        12: {
          step: 'Шаг 12 из 12',
          question: 'Почта или телефон для связи.',
          description:
            'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
        },
      },
      answers: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
      },
      visibleForm: true,
      visibleThanks: false,
      visiblePolicy: false,
      buttonName: 'Далее',
      buttonType: 'button',
    };
  },

  methods: {
    backForm() {
      if (this.counter > 1) {
        this.counter = this.counter - 1;
        this.formStatus();
      }
    },

    formStatus() {
      if (this.counter === 12) {
        this.visiblePolicy = true;
        this.buttonName = 'Отправить';
        this.buttonType = 'submit';
      } else {
        this.visiblePolicy = false;
        this.buttonName = 'Далее';
        this.buttonType = 'button';
      }
    },

    submitForm() {
      this.answers[this.counter] = this.$refs.input.value;

      if (this.counter < 12) {
        this.counter = this.counter + 1;
        this.formStatus();
      } else {
        console.log('susses');
        this.visibleForm = false;
        this.visibleThanks = true;
      }
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
  transition: opacity linear 0.1s;
}

.form-questions__button-back:hover {
  opacity: 0.6;
}

.form-questions__button-back:focus {
  outline: none;
  opacity: 0.6;
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
  opacity: 0.6;
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
