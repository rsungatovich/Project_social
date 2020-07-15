<template>
  <popup @theClick="closePopup">
    <form class="form-contacts" @submit.prevent="submitForm">
      <p class="form-contacts__headline">
        {{ getInformation.headline }}
      </p>
      <p class="form-contacts__description">
        {{ getInformation.description }}
      </p>
      <label class="form-contacts__label" for="name">
        {{ getInformation.nameLabel }}
      </label>
      <input
        class="form-contacts__input"
        type="text"
        name="name"
        placeholder="Напишите тут"
        required
        v-model="valueName"
      />
      <div class="form-contacts__inputs">
        <div class="form-contacts__box">
          <label class="form-contacts__label" for="email">
            {{ getInformation.emailLabel }}
          </label>
          <input
            class="form-contacts__input"
            type="email"
            name="email"
            placeholder="pochta@example.com"
            required
            v-model="valueEmail"
          />
        </div>
        <div class="form-contacts__box">
          <label class="form-contacts__label" for="phone">
            {{ getInformation.phoneLabel }}
          </label>
          <input
            class="form-contacts__input"
            type="tel"
            name="phone"
            placeholder="+7 000 000 00 00"
            required
            v-model="valuePhone"
          />
        </div>
      </div>
      <label class="form-contacts__label" for="other">
        {{ getInformation.otherLabel }}
      </label>
      <input
        class="form-contacts__input"
        type="text"
        name="other"
        placeholder="Телефон / почта и удобное время"
        v-model="valueOther"
      />
      <div class="form-contacts__container">
        <ui-button-small class="form-contacts__button-small">
          {{ buttonSend }}
        </ui-button-small>
        <p class="form-contacts__policy">
          Нажимая на кнопку «отправить», вы даете согласие на
          <a class="form-contacts__link" href="/policy" target="_blank">
            обработку персональных данных</a
          >
        </p>
      </div>
    </form>
  </popup>
</template>

<script>
import Popup from '@/components/ui/Popup.vue';
import ButtonSmall from '@/components/ui/ButtonSmall.vue';

export default {
  components: {
    popup: Popup,
    'ui-button-small': ButtonSmall,
  },
  data() {
    return {
      valueName: '',
      valueEmail: '',
      valuePhone: '',
      valueOther: '',
      buttonSend: 'Отправить',
    };
  },
  computed: {
    getInformation() {
      return this.$store.getters['formContacts/getInformation'];
    },
  },
  methods: {
    submitForm() {
      console.log('susses');
      this.setValues('name', this.valueName);
      this.setValues('email', this.valueEmail);
      this.setValues('phone', this.valuePhone);
      this.setValues('other', this.valueOther);
      this.closePopup();
    },
    closePopup() {
      this.$store.commit('formContacts/setPopupState');
    },
    setValues(type, value) {
      return this.$store.commit('formContacts/setValues', { type, value });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-contacts {
  min-height: 710px;
}

.form-contacts__headline {
  margin: 0 0 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.form-contacts__description {
  margin: 0 0 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}

.form-contacts__label {
  margin: 0 0 40px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}

.form-contacts__input {
  width: 100%;
  min-height: 52px;
  padding: 0 10px;
  font-size: 18px;
  line-height: 24px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #afafaf;
}

.form-contacts__input:focus {
  outline: none;
  border-bottom: 2px solid black;
}

.form-contacts__inputs {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
}

.form-contacts__box {
  width: 48%;
}

.form-contacts__container {
  margin: 60px 0 0;
  display: flex;
  align-items: center;
}

.form-contacts__button-small {
  padding: 0 70px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

.form-contacts__policy {
  max-width: 378px;
  margin: 0 0 0 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}

.form-contacts__link {
  color: #666666;
  transition: opacity linear 0.1s;
}

.form-contacts__link:hover {
  opacity: 0.6;
}

.form-contacts__link:focus {
  outline: none;
  opacity: 0.6;
}

@media screen and (max-width: 1280px) {
  .form-contacts__headline {
    font-size: 28px;
    line-height: 32px;
  }

  .form-contacts__description {
    font-size: 16px;
    line-height: 22px;
  }

  .form-contacts__label {
    font-size: 16px;
    line-height: 22px;
  }

  .form-contacts__input {
    font-size: 16px;
    line-height: 22px;
  }

  .form-contacts__button-small {
    padding: 0 60px;
  }
}

@media screen and (max-width: 768px) {
  .form-contacts__headline {
    margin: 0 0 50px;
    font-size: 26px;
    line-height: 30px;
  }

  .form-contacts__description {
    margin: 0 0 40px;
    font-size: 15px;
    line-height: 19px;
  }

  .form-contacts__label {
    margin: 0 0 40px;
    font-size: 15px;
    line-height: 19px;
  }

  .form-contacts__input {
    min-height: 46px;
    font-size: 15px;
    line-height: 19px;
  }

  .form-contacts__inputs {
    margin: 40px 0;
  }

  .form-contacts__button-small {
    padding: 0 57px;
    min-height: 46px;
  }

  .form-contacts__policy {
    max-width: 270px;
    font-size: 11px;
    line-height: 13px;
  }
}

@media screen and (max-width: 560px) {
  .form-contacts__headline {
    max-width: 185px;
    margin: 0 0 35px;
    font-size: 18px;
    line-height: 21px;
  }

  .form-contacts__description {
    margin: 0 0 30px;
    font-size: 13px;
    line-height: 17px;
  }

  .form-contacts__label {
    margin: 0 0 20px;
    font-size: 13px;
    line-height: 16px;
  }

  .form-contacts__input {
    min-height: 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .form-contacts__inputs {
    min-height: 196px;
    margin: 40px 0;
    flex-direction: column;
  }

  .form-contacts__box {
    width: 100%;
  }

  .form-contacts__container {
    min-height: 196;
    margin: 45px 0 0;
    display: block;
  }

  .form-contacts__button-small {
    width: 100%;
    padding: 0;
  }

  .form-contacts__policy {
    width: 100%;
    max-width: unset;
    margin: 10px 0 0;
    font-size: 11px;
    line-height: 13px;
  }
}
</style>
