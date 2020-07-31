<template>
  <footer class="footer">
    <section class="footer__content">
      <div class="footer__box footer__box_left">
        <ui-title class="footer__title">
          {{ getSectionData.title }}
        </ui-title>
        <nav class="footer__navigation">
          <nuxt-link to="/" class="footer__link">
            {{ getSectionData.buttonMain }}
          </nuxt-link>
          <nuxt-link to="/stories" class="footer__link">
            {{ getSectionData.buttonStories }}
          </nuxt-link>
        </nav>
      </div>
      <div class="footer__box footer__box_right">
        <div class="footer__social">
          <p class="footer__links">
            Мы в
            <a
              href="https://www.instagram.com/raklechitsa/"
              class="footer__link footer__link_underline"
              target="_blank"
            >
              Инстаграме
            </a>
            и
            <a
              href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
              class="footer__link footer__link_underline"
              target="_blank"
            >
              YouTube
            </a>
          </p>
          <button class="footer__share" @click="setPopupSocialsState">
            {{ getSectionData.buttonShare }}
          </button>
        </div>
      </div>
    </section>
    <section class="footer__copyright">
      <p class="footer__copy">{{ getSectionData.copyrightFirst }}</p>
      <p class="footer__copy">{{ getSectionData.copyrightLast }}</p>
    </section>
  </footer>
</template>

<script>
import Title from '@/components/ui/Title';

export default {
  components: {
    'ui-title': Title,
  },

  computed: {
    getSectionData() {
      return this.$store.getters['sectionFooter/getData'];
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
.footer {
  max-width: 1440px;
  padding: 60px 60px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.footer__content {
  display: flex;
  margin-bottom: 110px;
}

.footer__box {
  width: 50%;
}

.footer__box_left {
  min-width: 400px;
  display: flex;
  justify-content: space-between;
}

.footer__box_right {
  display: flex;
  justify-content: flex-end;
}

.footer__navigation {
  width: 172px;
  display: flex;
  justify-content: space-between;
}

.footer__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
  transition: opacity linear 0.2s;
}

.footer__link:hover {
  opacity: 0.3;
}

.footer__link:focus {
  outline: none;
}

.footer__link_underline {
  border-bottom: 1px solid #000000;
}

.footer__social {
  width: 300px;
}

.footer__links {
  margin: 0 0 44px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.footer__share {
  @extend %button-default;
  max-width: 300px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  transition: opacity linear 0.2s;
}

.footer__share:hover {
  opacity: 0.3;
}

.footer__share:focus {
  outline: none;
}

.footer__copyright {
  display: flex;
  justify-content: space-between;
}

.footer__copy {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding: 50px;
  }

  .footer__social {
    width: 265px;
  }

  .footer__link {
    font-size: 16px;
  }

  .footer__links {
    font-size: 16px;
  }

  .footer__share {
    font-size: 16px;
  }

  .footer__copy {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__social {
    width: auto;
  }

  .footer__navigation {
    width: 162px;
  }

  .footer__links {
    margin: 0 0 30px;
  }

  .footer__content {
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 50px 40px;
  }

  .footer__title {
    margin: 0;
    max-width: 280px;
  }

  .footer__box_left {
    width: 55%;
    min-width: unset;
  }

  .footer__box_right {
    width: 45%;
  }

  .footer__navigation {
    width: auto;
    height: 63px;
    display: flex;
    flex-direction: column;
  }

  .footer__links {
    margin: 0 0 15px;
  }
}

@media screen and (max-width: 640px) {
  .footer__title {
    margin: 0 0 50px;
  }

  .footer__box_left {
    width: auto;
    margin: 0 0 20px;
    flex-direction: column;
  }

  .footer__box_right {
    width: auto;
    justify-content: unset;
  }

  .footer__content {
    margin-bottom: 50px;
    flex-direction: column;
  }

  .footer__navigation {
    height: 68px;
  }

  .footer__links {
    margin: 0 0 20px;
  }
}

@media screen and (max-width: 580px) {
  .footer__copyright {
    display: block;
  }

  .footer__copy:first-child {
    margin: 0 0 10px;
  }
}

@media screen and (max-width: 425px) {
  .footer {
    max-width: 1440px;
    padding: 50px 15px;
  }

  .footer__navigation {
    height: 53px;
  }

  .footer__link {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__links {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__share {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__copy {
    font-size: 13px;
  }
}
</style>
