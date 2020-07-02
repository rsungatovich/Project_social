<template>
  <popup @closePopup="$emit('closePopup')">
    <div class="popup-thanks">
      <p class="popup-thanks__heading">
        Спасибо что приняли участие!
      </p>
      <ui-button-small class="popup-thanks__button-small">
        Закрыть
      </ui-button-small>
    </div>
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
};
</script>

<style lang="scss" scoped>
.popup-thanks {
  width: 100%;
  min-height: 520px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.popup-thanks__heading {
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.popup-thanks__button-small {
  padding: 0 70px;
}

@media screen and (max-width: 1280px) {
  .popup-thanks {
    min-height: 440px;
  }

  .popup-thanks__heading {
    font-size: 28px;
    line-height: 32px;
  }

  .popup-thanks__button-small {
    padding: 0 60px;
  }
}

@media screen and (max-width: 768px) {
  .popup-thanks__heading {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (max-width: 600px) {
  .popup-thanks__heading {
    max-width: 260px;
    margin: 0 0 30px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
}

@media screen and (max-width: 425px) {
  .popup-thanks__button-small {
    width: 100%;
    padding: 0;
  }
}
</style>
