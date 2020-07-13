<template>
  <article class="article">
    <div class="article__persone">
      <img class="article__photoe" :src="image" alt="Человек" />
      <div class="article__box">
        <p class="article__blockquote">
          <span class="article__author"> {{ author }}: </span>
          {{ quote }}
        </p>
        <div class="article__copyright">
          <button class="article__share" @click="openPopup">
            Поделитесь ↗
          </button>
          <time class="article__date">
            {{ date }}
          </time>
        </div>
      </div>
    </div>
    <div class="article__persone-story" v-html="story"></div>
    <button class="article__share article__share_long" @click="openPopup">
      Поделитесь этой статьей в своих социальных сетях ↗
    </button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://volley.sport-liga.pro/images/no_image.png',
      author: 'Александр Тарханов',
      quote: '«Я не могу победить свою пунктуальность в отличии от рака»',
      date: '20 апреля 2018',
      story: `
        <p class="article__text">
          Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
          ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
        </p>
        <p class="article__text">
          У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
          особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
          графика или опережаю. Вот такие встроенные внутренние часы! Будильник
          мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
          армии, за 45 секунд.
        </p>
        <p class="article__text article__text_bold">
          «В футболе если команда опоздала на 15 минут, ей засчитывается
          поражение».
        </p>
        <p class="article__text">
          Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
          что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
          приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
          опоздаю!
        </p>
        <p class="article__text">
          Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
          билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
          — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
          «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
          минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
          Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
          злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
          перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
          «Значит, точно проиграем». Такая болезненная пунктуальность уже не
          лечится. В отличие от рака.
        </p>
        <p class="article__text article__text_bold">
          «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
          злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
          перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
          «Значит, точно проиграем». Такая болезненная пунктуальность уже не
          лечится».
        </p>
      `,
    };
  },

  methods: {
    openPopup() {
      this.$store.commit('popupSocials/setPopupState');
    },
  },
};
</script>

<style lang="scss" scoped>
.article__persone {
  display: flex;
}

.article__photoe {
  width: 43.9%;
  margin: 0 60px 0 0;
}

.article__box {
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  justify-content: space-between;
}

.article__blockquote {
  max-width: 680px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
}

.article__author {
  font-weight: 500;
}

.article__copyright {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.article__share {
  @extend %button-default;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  transition: opacity linear 0.1s;
}

.article__share:hover {
  opacity: 0.6;
}

.article__share:focus {
  outline: none;
  opacity: 0.6;
}

.article__share_long {
  margin: 0 auto;
  display: block;
}

.article__date {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}

.article__persone-story {
  max-width: 780px;
  margin: 130px auto 100px;
}

.article__persone-story /deep/ .article__text {
  margin: 0 0 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
}

.article__persone-story /deep/ .article__text:last-child {
  margin: 0;
}

.article__persone-story /deep/ .article__text_bold {
  font-weight: 600;
}

@media screen and (max-width: 1280px) {
  .article__blockquote {
    max-width: 602px;
    font-size: 34px;
    line-height: 44px;
  }

  .article__persone-story {
    max-width: 720px;
    margin: 120px auto 90px;
  }

  .article__persone-story /deep/ .article__text {
    margin: 0 0 40px;
    font-size: 20px;
    line-height: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .article__photoe {
    margin: 0 40px 0 0;
  }

  .article__box {
    padding: 20px 0;
  }

  .article__blockquote {
    max-width: 477px;
    font-size: 30px;
    line-height: 38px;
  }

  .article__share {
    font-size: 16px;
  }

  .article__date {
    font-size: 16px;
  }

  .article__persone-story {
    max-width: 640px;
    margin: 90px auto 70px;
  }

  .article__persone-story /deep/ .article__text {
    margin: 0 0 40px;
    font-size: 18px;
    line-height: 27px;
  }
}

@media screen and (max-width: 768px) {
  .article__persone {
    position: relative;
    flex-direction: column-reverse;
  }

  .article__photoe {
    width: 420px;
    margin: 60px auto 77px;
  }

  .article__box {
    padding: 0;
  }

  .article__blockquote {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
  }

  .article__copyright {
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
  }

  .article__persone-story {
    margin: 120px auto 104px;
  }
}

@media screen and (max-width: 530px) {
  .article__blockquote {
    font-size: 18px;
    line-height: 21px;
  }

  .article__share {
    font-size: 13px;
    line-height: 16px;
  }

  .article__date {
    font-size: 13px;
    line-height: 16px;
  }

  .article__photoe {
    width: 100%;
  }

  .article__persone-story {
    margin: 60px auto;
  }

  .article__persone-story /deep/ .article__text {
    margin: 0 0 20px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 425px) {
  .article__photoe {
    margin: 30px 0 47px;
  }
}
</style>
