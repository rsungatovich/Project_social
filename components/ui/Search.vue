<template>
  <div class="search">
    <input
      class="search__input"
      type="text"
      ref="input"
      placeholder="Найти..."
      @keydown="searchData"
    />
    <button class="search__button-reset" @click="resetValue">
      {{ buttonReset }}
    </button>
    <ui-button-small class="search__button-small" @theClick="searchData">
      {{ buttonSearch }}
    </ui-button-small>
    <button class="search__button-small-mob" @click="searchData"></button>
    <button class="search__button-reset-mob" @click="resetValue"></button>
  </div>
</template>

<script>
import ButtonSmall from '@/components/ui/ButtonSmall.vue';

export default {
  components: {
    'ui-button-small': ButtonSmall,
  },

  data() {
    return {
      buttonReset: 'Очистить',
      buttonSearch: 'Поиск',
    };
  },

  methods: {
    setValue(value) {
      this.$store.commit('search/setValue', { value });
    },

    resetValue() {
      this.$refs.input.value = '';
      this.$store.commit('search/resetValue');
    },

    setCurrentPage(param) {
      return this.$store.commit('pagination/setCurrentPage', { param });
    },

    searchData(event) {
      if (event.target.tagName === 'INPUT' && event.keyCode == 13) {
        this.setCurrentPage(1);
        this.setValue(this.$refs.input.value);
      }

      if (event.target.tagName === 'BUTTON') {
        this.setCurrentPage(1);
        this.setValue(this.$refs.input.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  position: relative;
}

.search__input {
  width: 100%;
  min-height: 52px;
  margin: 0 20px 0 0;
  padding: 0 108px 0 10px;
  font-style: normal;
  font-size: 22px;
  border: 1px solid #afafaf;
}

.search__input::placeholder {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
}

.search__input:focus {
  outline: none;
}

.search__button-small-mob {
  @extend %button-default;
  height: 46px;
  padding: 0 23px;
  display: none;
  background-color: $mainColor;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='17' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5.913' cy='5.913' r='5.413' stroke='%23fff'/%3E%3Cpath stroke='%23fff' d='M10.092 10.081l6.261 6.261'/%3E%3C/svg%3E");
  transition: opacity linear 0.2s;
}

.search__button-small-mob:hover {
  opacity: 0.3;
}

.search__button-small-mob:focus {
  outline: none;
}

.search__button-reset {
  @extend %button-default;
  height: 100%;
  top: 0;
  right: 266px;
  display: inline-block;
  position: absolute;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  transition: opacity linear 0.2s;
}

.search__button-reset:hover {
  opacity: 0.3;
}

.search__button-reset:focus {
  outline: none;
}

.search__button-reset-mob {
  @extend %button-default;
  width: 46px;
  height: 46px;
  top: 0;
  right: 266px;
  display: none;
  position: absolute;
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23666' stroke-width='2' d='M7.93 7.929l14.142 14.142M7.93 22.071L22.072 7.929'/%3E%3C/svg%3E");
  transition: opacity linear 0.2s;
}

.search__button-reset-mob:hover {
  opacity: 0.3;
}

.search__button-reset:focus {
  outline: none;
}

.search__button-reset-mob:focus {
  outline: none;
}

@media screen and (max-width: 1280px) {
  .search__input {
    min-height: 46px;
  }
}

@media screen and (max-width: 1024px) {
  .search__button-reset {
    right: 248px;
    font-size: 15px;
    line-height: 18px;
  }

  .search__input {
    min-height: 44px;
    font-size: 22px;
  }
}

@media screen and (max-width: 768px) {
  .search__input {
    font-size: 18px;
  }

  .search__button-reset {
    display: none;
  }

  .search__button-reset-mob {
    right: 225px;
    display: block;
  }
}

@media screen and (max-width: 640px) {
  .search__input {
    margin: 0 6px 0 0;
    padding: 0 46px 0 10px;
    font-size: 16px;
  }

  .search__button-reset-mob {
    right: 53px;
  }

  .search__button-small {
    display: none;
  }

  .search__button-small-mob {
    display: inline-block;
  }
}

@media screen and (max-width: 425px) {
}

@media screen and (max-width: 320px) {
}
</style>
