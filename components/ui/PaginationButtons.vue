<template>
  <div class="pagination-buttons">
    <div class="pagination-buttons__container">
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_text 
        pagination-buttons__button_active"
      >
        Первая
      </button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_left"
      ></button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_num"
      >
        1
      </button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_num"
      >
        2
      </button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_num"
      >
        3
      </button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_num 
        pagination-buttons__button_four"
      >
        4
      </button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_num 
        pagination-buttons__button_five"
      >
        5
      </button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_right"
      ></button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_text"
      >
        Последняя
      </button>
    </div>
    <div
      class="pagination-buttons__container 
      pagination-buttons__container_mob"
    >
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_text-mob 
        pagination-buttons__button_active"
      >
        Первая
      </button>
      <button
        class="pagination-buttons__button 
        pagination-buttons__button_text-mob"
      >
        Последняя
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pagination-buttons__container {
  display: flex;
  justify-content: center;
}

.pagination-buttons__container_mob {
  margin: 34px 0 0;
  padding: 0 23px;
  display: none;
  justify-content: space-between;
}

.pagination-buttons__button {
  @extend %button-default;
  width: 58px;
  height: 58px;
  margin: 0 10px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  transition: opacity linear 0.1s;
}

.pagination-buttons__button:hover {
  opacity: 0.6;
}

.pagination-buttons__button:focus {
  outline: none;
  opacity: 0.6;
}

.pagination-buttons__button:last-child {
  margin: 0;
}

.pagination-buttons__button_text {
  width: unset;
  height: unset;
}

.pagination-buttons__button_text-mob {
  width: unset;
  height: unset;
  margin: 0;
  display: none;
}

.pagination-buttons__button_left {
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1L2 11l10 10' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
}

.pagination-buttons__button_right {
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 21l10-10L1 1' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
}

.pagination-buttons__button_active {
  opacity: 0.6;
}

@media screen and (max-width: 1280px) {
  .pagination-buttons__button {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .pagination-buttons__button {
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 18px;
  }

  .pagination-buttons__button_text {
    width: unset;
    height: unset;
  }
}

@media screen and (max-width: 768px) {
  .pagination-buttons__button_five {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .pagination-buttons__button_right {
    margin: 0;
  }

  .pagination-buttons__button_four {
    display: none;
  }

  .pagination-buttons__button_text {
    display: none;
  }

  .pagination-buttons__container_mob {
    display: flex;
  }

  .pagination-buttons__button_text-mob {
    width: unset;
    height: unset;
    margin: 0;
    display: inline-block;
  }
}
</style>
