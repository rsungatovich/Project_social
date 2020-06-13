<template>
  <div class="progress-card">
    <p class="progress-card__description">
      Описание статистики
    </p>
    <div class="progress-card__box">
      <progress-bar class="progress-card__progress-bar" />
      <p class="progress-card__meta">
        10%
      </p>
      <span class="progress-card__copy">
        Иточник
      </span>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';

export default {
  components: {
    'progress-bar': ProgressBar,
  },
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
</style>
