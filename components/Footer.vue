<template>
  <footer class="footer">
    <section class="footer__content">
      <div class="footer__box footer__box_left">
        <section-title class="footer__section-title">
          Спасибо всем, кто помог состояться этому проекту
        </section-title>
        <nav class="footer__navigation">
          <nuxt-link to="/" class="footer__link">Главная</nuxt-link>
          <nuxt-link to="/" class="footer__link">Истории</nuxt-link>
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
          <button class="footer__button">Поделитесь ↗</button>
        </div>
      </div>
    </section>
    <section class="footer__copyright">
      <p class="footer__copy">Рак Лечится 2020</p>
      <p class="footer__copy">Сделано студентами Яндекс Практикум</p>
    </section>
  </footer>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';

export default {
  components: {
    'section-title': SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 60px 0;
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
  display: flex;
  justify-content: space-between;
}

.footer__box_right {
  display: flex;
  justify-content: flex-end;
}

.footer__navigation {
  width: 188px;
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
}

.footer__link_underline {
  border-bottom: 1.5px solid #000000;
}

.footer__social {
  width: 300px;
}

.footer__links {
  margin: 0;
  margin-bottom: 44px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.footer__button {
  max-width: 300px;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  color: #000000;
  background-color: transparent;
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
// rerequest
</style>
