<template>
  <article class="article">
    <div class="article__persone">
      <div class="article__photo-box">
        <img
          class="article__photo"
          :src="`https://strapi.kruzhok.io${findImageSize(findStoryData)}`"
          alt="Человек"
        />
      </div>
      <div class="article__box">
        <p class="article__blockquote">
          <span class="article__author"> {{ findStoryData.author }}: </span>
          {{ findStoryData.title }}
        </p>
        <div class="article__copyright">
          <button class="article__share" @click="setPopupSocialsState">
            {{ getUIData.buttonShareSmall }}
          </button>
          <time class="article__date">
            {{ localizedDate }}
          </time>
        </div>
      </div>
    </div>
    <div class="article__persone-story" v-html="findStoryData.text"></div>
    <button
      class="article__share article__share_long"
      @click="setPopupSocialsState"
    >
      {{ getUIData.buttonShareLong }}
    </button>
  </article>
</template>

<script>
export default {
  computed: {
    findStoryData() {
      return this.getStoriesData.find(item => {
        return item.id == this.$route.params.id;
      });
    },
    localizedDate() {
      const date = new Date(this.findStoryData.date);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const localizedDate = date
        .toLocaleString('ru', options)
        .replace(/\s*г\./, '');

      return localizedDate;
    },
    getStoriesData() {
      return this.$store.getters['globalStoriesData/getData'];
    },
    getUIData() {
      return this.$store.getters['uiArticle/getData'];
    },
  },

  methods: {
    setPopupSocialsState() {
      this.$store.commit('uiPopupSocials/toggleState');
    },

    findImageSize(card) {
      if (card.ImageUrl[0].formats.large)
        return card.ImageUrl[0].formats.large.url;
      if (card.ImageUrl[0].formats.medium)
        return card.ImageUrl[0].formats.medium.url;
      if (card.ImageUrl[0].formats.small)
        return card.ImageUrl[0].formats.small.url;
      if (card.ImageUrl[0].formats.thumbnail)
        return card.ImageUrl[0].formats.thumbnail.url;
    },
  },
};
</script>

<style lang="scss" scoped>
.article__persone {
  display: flex;
}

.article__photo-box {
  width: 44%;
  height: 0;
  margin: 0 60px 0 0;
  padding-top: 44%;
  position: relative;
}

.article__photo {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
  object-position: center;
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
  transition: opacity linear 0.2s;
}

.article__share:hover {
  opacity: 0.6;
}

.article__share:focus {
  outline: none;
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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
}

// приходящие данные

.article__persone-story /deep/ p {
  margin: 0;
  font-size: 22px;
  line-height: 30px;
}

.article__persone-story /deep/ figure {
  margin: 0;
}

.article__persone-story /deep/ figcaption {
  margin: 0;
  font-size: 22px;
  line-height: 30px;
}

.article__persone-story /deep/ blockquote {
  margin: 0;
  font-weight: 600;
}

.article__persone-story /deep/ blockquote p {
  margin: 0;
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

  .article__persone-story /deep/ p {
    font-size: 20px;
    line-height: 28px;
  }

  .article__persone-story /deep/ figcaption {
    font-size: 20px;
    line-height: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .article__photo-box {
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

  .article__persone-story /deep/ p {
    font-size: 18px;
    line-height: 27px;
  }

  .article__persone-story /deep/ figcaption {
    font-size: 18px;
    line-height: 27px;
  }
}

@media screen and (max-width: 768px) {
  .article__persone {
    position: relative;
    flex-direction: column-reverse;
  }

  .article__photo-box {
    width: 420px;
    height: 420px;
    padding-top: 0;
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

  .article__photo-box {
    width: 100%;
    height: 0;
    padding-top: 100%;
  }

  .article__persone-story {
    margin: 60px auto;
  }

  .article__persone-story /deep/ p {
    font-size: 13px;
    line-height: 16px;
  }

  .article__persone-story /deep/ figcaption {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 425px) {
  .article__photo-box {
    margin: 30px 0 47px;
  }
}
</style>
