<template>
  <div class="pagination-buttons">
    <div class="pagination-buttons__container">
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_first`,
          {
            'pagination-buttons__button_is-active': getUIData.currentPage === 1,
          },
        ]"
        @click="switchFirstPage"
      ></button>
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_left`,
          {
            'pagination-buttons__button_is-active': getUIData.currentPage === 1,
          },
        ]"
        @click="prevPage"
      ></button>
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_num`,
          {
            'pagination-buttons__button_current': num === getUIData.currentPage,
          },
        ]"
        v-for="num of numButtons"
        :key="num.id"
        :ref="num"
        @click="switchPage"
      >
        {{ num }}
      </button>
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_right`,
          {
            'pagination-buttons__button_is-active':
              getUIData.currentPage === totalPages,
          },
        ]"
        @click="nextPage"
      ></button>
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_last`,
          {
            'pagination-buttons__button_is-active':
              getUIData.currentPage === totalPages,
          },
        ]"
        @click="switchLastPage"
      ></button>
    </div>
    <div class="pagination-buttons__container">
      <p class="pagination-buttons__total">
        {{ `${getUIData.currentPage} из ${totalPages}` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['getStoriesData'],

  computed: {
    countButtons() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          return 2;
        } else {
          return 1;
        }
      } else {
        return 2;
      }
    },
    numButtons() {
      const buttons = [];

      for (let num = this.rangeStart; num <= this.rangeEnd; num++) {
        buttons.push(num);
      }

      return buttons;
    },
    totalPages() {
      return Math.ceil(this.getStoriesData.length / this.getUIData.perPage);
    },
    rangeStart() {
      let start;

      if (
        this.getUIData.currentPage === this.totalPages ||
        this.getUIData.currentPage === this.totalPages - 1
      ) {
        this.countButtons === 2
          ? (start = this.totalPages - 4)
          : (start = this.totalPages - 2);
      } else {
        start = this.getUIData.currentPage - this.countButtons;
      }
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      let end;

      if (
        this.getUIData.currentPage === 1 ||
        this.getUIData.currentPage === 2
      ) {
        this.countButtons === 2 ? (end = 5) : (end = 3);
      } else {
        end = this.getUIData.currentPage + this.countButtons;
      }
      return end < this.totalPages ? end : this.totalPages;
    },
    getUIData() {
      return this.$store.getters['uiPagination/getData'];
    },
  },

  methods: {
    prevPage() {
      if (this.getUIData.currentPage > 1) {
        this.setSectionData('currentPage', this.getUIData.currentPage - 1);
      }
    },
    nextPage() {
      if (this.getUIData.currentPage < this.totalPages) {
        this.setSectionData('currentPage', this.getUIData.currentPage + 1);
      }
    },
    switchPage(event) {
      this.setSectionData('currentPage', +event.target.textContent);
    },
    switchFirstPage() {
      this.setSectionData('currentPage', 1);
    },
    switchLastPage() {
      this.setSectionData('currentPage', this.totalPages);
    },
    setSectionData(prop, value) {
      this.$store.commit('uiPagination/setData', { prop, value });
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-buttons__container {
  display: flex;
  justify-content: center;
}

.pagination-buttons__total {
  margin: 20px 0 0;
  font-size: 18px;
  color: #a2a2a2;
}

.pagination-buttons__button {
  @extend %button-default;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  transition: all linear 0.2s;
}

.pagination-buttons__button_num {
  width: 58px;
  height: 58px;
  margin: 0 10px 0 0;
}

.pagination-buttons__button_current {
  color: #ffffff;
  background-color: $mainColor;
}

.pagination-buttons__button:focus {
  outline: none;
}

.pagination-buttons__button_num:last-child {
  margin: 0;
}

.pagination-buttons__button_first {
  width: 30px;
  background-size: 15px;
  background-position: 15px;
  background-repeat: repeat-x;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1L2 11l10 10' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
}

.pagination-buttons__button_last {
  width: 30px;
  background-size: 15px;
  background-position: -15px;
  background-repeat: repeat-x;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 21l10-10L1 1' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
}

.pagination-buttons__button_first:hover {
  opacity: 0.3;
}

.pagination-buttons__button_last:hover {
  opacity: 0.3;
}

.pagination-buttons__button_left {
  width: 40px;
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1L2 11l10 10' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
}

.pagination-buttons__button_right {
  width: 40px;
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 21l10-10L1 1' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
}

.pagination-buttons__button_left:hover {
  opacity: 0.3;
}

.pagination-buttons__button_right:hover {
  opacity: 0.3;
}

.pagination-buttons__button_is-active {
  opacity: 0.3;
}

@media screen and (max-width: 1280px) {
  .pagination-buttons__button_num {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .pagination-buttons__button_num {
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 18px;
  }

  .pagination-buttons__total {
    font-size: 15px;
  }
}

@media screen and (max-width: 425px) {
  .pagination-buttons__button_right {
    margin: 0;
  }
}

@media screen and (max-width: 375px) {
  .pagination-buttons__button_num {
    width: 40px;
    height: 40px;
  }
}
</style>
