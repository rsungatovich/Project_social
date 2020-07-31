<template>
  <div class="pagination-buttons">
    <div class="pagination-buttons__container">
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_first`,
          { 'pagination-buttons__button_is-active': getCurrentPage === 1 },
        ]"
        @click="switchFirstPage"
      ></button>
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_left`,
          { 'pagination-buttons__button_is-active': getCurrentPage === 1 },
        ]"
        @click="prevPage"
      ></button>
      <button
        :class="[
          `pagination-buttons__button
        pagination-buttons__button_num`,
          { 'pagination-buttons__button_current': num === getCurrentPage },
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
              getCurrentPage === totalPages,
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
              getCurrentPage === totalPages,
          },
        ]"
        @click="switchLastPage"
      ></button>
    </div>
    <div class="pagination-buttons__container">
      <p class="pagination-buttons__total">
        {{ `${getCurrentPage} из ${totalPages}` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageRange: 2,
    };
  },

  props: ['getStoriesData'],

  computed: {
    numButtons() {
      const buttons = [];

      for (let num = this.rangeStart; num <= this.rangeEnd; num++) {
        buttons.push(num);
      }

      return buttons;
    },
    totalPages() {
      return Math.ceil(this.getStoriesData.length / this.getPerPage);
    },
    rangeStart() {
      let start;

      if (
        this.getCurrentPage === this.totalPages ||
        this.getCurrentPage === this.totalPages - 1
      ) {
        this.pageRange === 2
          ? (start = this.totalPages - 4)
          : (start = this.totalPages - 2);
      } else {
        start = this.getCurrentPage - this.pageRange;
      }
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      let end;

      if (this.getCurrentPage === 1 || this.getCurrentPage === 2) {
        this.pageRange === 2 ? (end = 5) : (end = 3);
      } else {
        end = this.getCurrentPage + this.pageRange;
      }
      return end < this.totalPages ? end : this.totalPages;
    },
    getPerPage() {
      return this.$store.getters['ui-pagination/getPerPage'];
    },
    getCurrentPage() {
      return this.$store.getters['ui-pagination/getCurrentPage'];
    },
  },

  methods: {
    countButtons() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          this.pageRange = 2;
        } else {
          this.pageRange = 1;
        }
      } else {
        this.pageRange = 2;
      }
    },
    switchPage(event) {
      this.setCurrentPage(+event.target.textContent);
    },
    switchFirstPage() {
      this.setCurrentPage(1);
    },
    switchLastPage() {
      this.setCurrentPage(this.totalPages);
    },
    prevPage() {
      if (this.getCurrentPage > 1) {
        this.setCurrentPage(this.getCurrentPage - 1);
      }
    },
    nextPage() {
      if (this.getCurrentPage < this.totalPages) {
        this.setCurrentPage(this.getCurrentPage + 1);
      }
    },
    setCurrentPage(param) {
      return this.$store.commit('ui-pagination/setCurrentPage', { param });
    },
  },

  created: function() {
    this.countButtons();
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
