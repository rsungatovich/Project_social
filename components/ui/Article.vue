<template>
  <article class="article">
    <div class="article__persone">
      <img
        class="article__photoe"
        :src="getStoriesData[$route.params.id - 1].photoe"
        alt="Человек"
      />
      <div class="article__box">
        <p class="article__blockquote">
          <span class="article__author">
            {{ getStoriesData[$route.params.id - 1].name }}:
          </span>
          {{ getStoriesData[$route.params.id - 1].quote }}
        </p>
        <div class="article__copyright">
          <button class="article__share" @click="openPopup">
            {{ buttonShareSmall }}
          </button>
          <time class="article__date">
            {{ getStoriesData[$route.params.id - 1].date }}
          </time>
        </div>
      </div>
    </div>
    <div
      class="article__persone-story"
      v-html="getStoriesData[$route.params.id - 1].story"
    ></div>
    <button class="article__share article__share_long" @click="openPopup">
      {{ buttonShareLong }}
    </button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      buttonShareSmall: 'Поделитесь ↗',
      buttonShareLong: 'Поделитесь этой статьей в своих социальных сетях ↗',
    };
  },

  computed: {
    getStoriesData() {
      return this.$store.getters['storiesData/getStoriesData'];
    },
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
