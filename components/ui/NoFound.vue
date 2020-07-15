<template>
  <div class="no-found">
    <h3 class="no-found__title">
      {{ getMessages.noFoundTitle }}
    </h3>
    <p class="no-found__subtitle">
      {{ getMessages.noFoundSubtitle }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    getMessages() {
      return this.$store.getters['errorMessages/getMessages'];
    },
  },
};
</script>

<style lang="scss" scoped>
.no-found {
  min-height: 608px;
}

.no-found__title {
  margin: 0 0 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
}

.no-found__subtitle {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .no-found {
    min-height: 588px;
  }
}

@media screen and (max-width: 768px) {
  .no-found {
    min-height: 608px;
  }
}

@media screen and (max-width: 425px) {
  .no-found {
    min-height: 404px;
  }

  .no-found__title {
    margin: 0 0 15px;
    font-size: 24px;
    line-height: 29px;
  }

  .no-found__subtitle {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
