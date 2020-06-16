<template>
  <div class="search">
    <input class="search__input" type="text" />
    <button class="search__button-reset">
      Очистить
    </button>
    <ui-button-small class="search__button-small">
      Поиск
    </ui-button-small>
  </div>
</template>

<script>
import ButtonSmall from '@/components/ui/ButtonSmall.vue';

export default {
  components: {
    'ui-button-small': ButtonSmall,
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  position: relative;
  font-family: 'Inter', monospace;
}

.search__input {
  width: 100%;
  min-height: 52px;
  margin: 0 20px 0 0;
  padding: 0 108px 0 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  border: 1px solid #afafaf;
}

.search__button-reset {
  @extend %button-default;
  height: 100%;
  top: 0;
  right: 248px;
  display: inline-block;
  position: absolute;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
}
</style>
