<template>
  <div class="popup">
    <div class="popup__overlay" @click="$emit('theClick')"></div>
    <div class="popup__inner">
      <img
        class="popup__close"
        src="/images/close.svg"
        alt="Кнопка закрыть"
        @click="$emit('theClick')"
      />
      <slot>form</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.popup {
  width: 100%;
  height: 100%;
  min-width: 320px;
  padding: 0 60px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  position: fixed;
  box-sizing: border-box;
}

.popup__overlay {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #00000070;
}

.popup__inner {
  width: 920px;
  margin: auto;
  padding: 40px;
  position: relative;
  box-sizing: border-box;
  background-color: #ffffff;
}

.popup__close {
  top: 36px;
  right: 36px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
  transition: opacity linear 0.1s;
}

.popup__close:hover {
  opacity: 0.6;
}

.popup__close:focus {
  outline: none;
  opacity: 0.6;
}

@media screen and (max-width: 1280px) {
  .popup {
    padding: 0 50px;
  }

  .popup__inner {
    width: 800px;
  }
}

@media screen and (max-width: 768px) {
  .popup {
    padding: 0 40px;
  }

  .popup__inner {
    width: 580px;
  }
}

@media screen and (max-width: 425px) {
  .popup {
    padding: 0 15px;
  }

  .popup__close {
    top: 13px;
    right: 13px;
  }

  .popup__inner {
    width: 290px;
    padding: 15px;
  }
}
</style>
