<template>
  <div class="progress-card">
    <p class="progress-card__description">
      <slot name="description">description</slot>
    </p>
    <div class="progress-card__box">
      <ui-progress-bar
        class="progress-card__progress-bar"
        :progress="progress"
      />
      <p class="progress-card__meta">
        <slot name="meta">meta</slot>
      </p>
      <span class="progress-card__copy">
        <slot name="source">source</slot>
      </span>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';

export default {
  components: {
    'ui-progress-bar': ProgressBar,
  },
  props: ['progress'],
};
</script>

<style lang="scss" scoped>
.progress-card {
  width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
}

.progress-card__description {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
}

.progress-card__progress-bar {
  margin-bottom: 20px;
}

.progress-card__meta {
  margin: 0 0 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  color: #000000;
}

.progress-card__copy {
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .progress-card {
    width: 265px;
    height: 265px;
    padding: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .progress-card {
    width: 208px;
    height: 208px;
    padding: 10px;
  }

  .progress-card__description {
    font-size: 10px;
    line-height: 14px;
  }

  .progress-card__progress-bar {
    margin-bottom: 10px;
  }

  .progress-card__meta {
    margin: 0 0 10px;
    font-size: 26px;
    line-height: 30px;
  }

  .progress-card__copy {
    font-size: 10px;
    line-height: 14px;
  }
}

@media screen and (max-width: 768px) {
  .progress-card {
    width: 216px;
    height: 216px;
  }
}
</style>
