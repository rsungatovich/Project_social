<template>
  <div class="pagination-buttons">
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
      pagination-buttons__button_num"
    >
      4
    </button>
    <button
      class="pagination-buttons__button 
      pagination-buttons__button_num"
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pagination-buttons {
  display: flex;
  justify-content: center;
  font-family: 'Inter', monospace;
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
}

.pagination-buttons__button:last-child {
  margin: 0;
}

.pagination-buttons__button_text {
  width: unset;
  height: unset;
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
  color: #a2a2a2;
}
</style>
