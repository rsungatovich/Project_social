<template>
  <main class="content">
    <section-cover class="content__section-cover" :scrollTo="scrollTo" />
    <section-video class="content__section-video" ref="sectionVideo" />
    <ui-tag-banner class="content__tag-banner">
      <template v-slot:title>
        {{ getBannerData.tagContentFirst }}
      </template>
      <template v-slot:subtitle>
        {{ getBannerData.tagFirst }}
      </template>
    </ui-tag-banner>
    <section-mainstories class="content__section-mainstories" />
    <ui-tag-banner class="content__tag-banner">
      <template v-slot:title>
        {{ getBannerData.contentSecond }}
      </template>
      <template v-slot:subtitle>
        {{ getBannerData.tagFirst }} {{ getBannerData.tagSecond }}
      </template>
    </ui-tag-banner>
    <section-instagram class="content__section-instagram" />
    <section-tellstory class="content__section-tellstory" />
    <section-statistic class="content__section-statistic" />
    <section-about class="content__section-about" />
  </main>
</template>

<script>
import SectionCover from '@/components/SectionCover';
import SectionVideo from '@/components/SectionVideo';
import SectionMainstories from '@/components/SectionMainstories';
import SectionInstagram from '@/components/SectionInstagram';
import SectionTellstory from '@/components/SectionTellstory';
import SectionStatistic from '@/components/SectionStatistic';
import SectionAbout from '@/components/SectionAbout';
import TagBanner from '@/components/ui/TagBanner';

export default {
  components: {
    'ui-tag-banner': TagBanner,
    'section-cover': SectionCover,
    'section-video': SectionVideo,
    'section-mainstories': SectionMainstories,
    'section-instagram': SectionInstagram,
    'section-tellstory': SectionTellstory,
    'section-statistic': SectionStatistic,
    'section-about': SectionAbout,
  },

  computed: {
    getBannerData(state) {
      return this.$store.getters['uiTagBanner/getData'];
    },
  },

  methods: {
    scrollTo() {
      this.$refs.sectionVideo.$el.scrollIntoView({ behavior: 'smooth' });
    },
  },

  async fetch() {
    await this.$store.dispatch('globalContentData/dataRequest');
    await this.$store.dispatch('globalStoriesData/dataRequest');
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Inter', monospace;
}

.content__section-cover {
  margin: 0 auto;
}

.content__section-video {
  margin: 0 auto;
}

.content__tag-banner {
  margin: 0 auto;
}

.content__section-mainstories {
  margin: 0 auto;
}

.ui-content__tag-banner {
  margin: 0 auto;
}

.content__section-instagram {
  margin: 0 auto;
}

.content__section-tellstory {
  margin: 0 auto;
}

.content__section-statistic {
  margin: 0 auto;
}

.content__section-about {
  margin: 0 auto;
}

.content__no-found-404 {
  margin: 0 auto;
}
</style>
