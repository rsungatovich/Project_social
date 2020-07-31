<template>
  <popup @theClick="setPopupSocialsState">
    <div class="popup-socials">
      <p class="popup-socials__heading">
        {{ getUIData.description }}
      </p>
      <div class="popup-socials__icons">
        <a
          class="popup-socials__links"
          :href="getUIData.links.facebook"
          target="_blank"
        >
          <img
            class="popup-socials__icon"
            src="/images/facebook.svg"
            alt="facebook"
          />
        </a>
        <a
          class="popup-socials__links"
          :href="getUIData.links.twitter"
          target="_blank"
        >
          <img
            class="popup-socials__icon"
            src="/images/twitter.svg"
            alt="twitter"
          />
        </a>
        <a
          class="popup-socials__links"
          :href="getUIData.links.vkontakte"
          target="_blank"
        >
          <img
            class="popup-socials__icon"
            src="/images/vkontakte.svg"
            alt="vkontakte"
          />
        </a>
        <a
          class="popup-socials__links"
          :href="getUIData.links.odnoklassniki"
          target="_blank"
        >
          <img
            class="popup-socials__icon"
            src="/images/odnoklassniki.svg"
            alt="odnoklassniki"
          />
        </a>
        <a
          class="popup-socials__links"
          :href="getUIData.links.instagram"
          target="_blank"
        >
          <img
            class="popup-socials__icon"
            src="/images/instagram.svg"
            alt="instagram"
          />
        </a>
        <a
          class="popup-socials__links"
          :href="getUIData.links.youtube"
          target="_blank"
        >
          <img
            class="popup-socials__icon"
            src="/images/youtube.svg"
            alt="youtube"
          />
        </a>
      </div>
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
  computed: {
    getUIData() {
      return this.$store.getters['ui-popupSocials/getData'];
    },
  },
  methods: {
    setPopupSocialsState() {
      this.$store.commit('ui-popupSocials/setPopupState');
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-socials {
  width: 100%;
  min-height: 244px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.popup-socials__heading {
  margin: 0 0 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.popup-socials__icon {
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: transform linear 0.2s;
}

.popup-socials__icon:hover {
  transform: scale(1.2);
}

.popup-socials__icon:focus {
  outline: none;
}

.popup-socials__links {
  margin: 0 20px 0 0;
}

.popup-socials__links:last-child {
  margin: 0;
}

@media screen and (max-width: 1280px) {
  .popup-socials__heading {
    font-size: 28px;
    line-height: 32px;
  }
}

@media screen and (max-width: 768px) {
  .popup-socials__heading {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (max-width: 580px) {
  .popup-socials__icon {
    width: 30px;
    height: 30px;
  }

  .popup-socials__links {
    margin: 0 10px 0 0;
  }

  .popup-socials__links:last-child {
    margin: 0;
  }
}

@media screen and (max-width: 425px) {
  .popup-socials {
    min-height: 161px;
  }

  .popup-socials__heading {
    margin: 0 0 60px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
}
</style>
