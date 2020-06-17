<template>
  <section class="tag-banner">
    <div class="tag-banner__container">
      <h2 class="tag-banner__title">
        <slot>banner-content</slot>
        <span class="tag-banner__subtitle">#этонелечится</span>
      </h2>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tag-banner {
  max-width: 1440px;
  padding: 0 60px;
  box-sizing: border-box;
  font-family: 'Inter', monospace;
}

.tag-banner__container {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $mainColor;
}

.tag-banner__title {
  max-width: 750px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
}

.tag-banner__subtitle {
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 46px;
}

@media screen and (max-width: 1280px) {
  .tag-banner {
    padding: 0 50px;
  }

  .tag-banner__title {
    font-size: 28px;
  }

  .tag-banner__subtitle {
    font-size: 38px;
  }
}

@media screen and (max-width: 1024px) {
  .tag-banner__title {
    font-size: 24px;
    line-height: 40px;
  }

  .tag-banner__subtitle {
    font-size: 34px;
    line-height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .tag-banner {
    padding: 0 40px;
  }

  .tag-banner__container {
    padding: 12px 0;
  }

  .tag-banner__title {
    font-size: 22px;
    line-height: 36px;
  }

  .tag-banner__subtitle {
    display: block;
    font-size: 32px;
    line-height: 36px;
  }
}

@media screen and (max-width: 680px) {
  .tag-banner__title {
    max-width: 300px;
  }
}

@media screen and (max-width: 425px) {
  .tag-banner {
    padding: 0 15px;
  }

  .tag-banner__container {
    padding: 15px 0;
  }

  .tag-banner__title {
    max-width: 220px;
    font-size: 16px;
    line-height: 18px;
  }

  .tag-banner__subtitle {
    font-size: 22px;
    line-height: 24px;
  }
}
</style>
