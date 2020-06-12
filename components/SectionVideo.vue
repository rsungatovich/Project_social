<template>
  <section class="section-video">
    <div class="section-video__box">
      <ui-title class="section-video__title">
        Истории людей, победивших рак, но не свои привычки
      </ui-title>
      <ui-subtitle class="section-video__subtitle">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </ui-subtitle>
      <button class="section-video__button section-video__button_left"></button>
      <button
        class="section-video__button section-video__button_right"
      ></button>
    </div>
    <div class="section-video__box">
      <div class="section-video__inner">
        <iframe
          class="section-video__player"
          src="https://www.youtube.com/embed/ou60K0WfcJ0?fs=0&color=white"
        >
        </iframe>
        <img
          class="section-video__image"
          src="../static/images/Pozner1.jpg"
          alt="Познер"
        />
        <button class="section-video__button-play"></button>
      </div>
      <p class="section-video__excerpt">
        Все видео вы можете найте на нашем
        <a
          class="section-video__link"
          target="_blank"
          href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
        >
          YouTube канале.
        </a>
      </p>
    </div>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';

export default {
  components: {
    'ui-title': Title,
    'ui-subtitle': Subtitle,
  },
};
</script>

<style lang="scss" scoped>
.section-video {
  display: flex;
  padding: 100px 0 74px;
  justify-content: space-between;
  font-family: 'Inter', monospace;
}

.section-video__box {
}

.section-video__title {
  margin: 10px 0 32px;
}

.section-video__subtitle {
  margin-bottom: 150px;
}

.section-video__button {
  @extend %button-default;
  width: 40px;
  height: 40px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: $mainColor;
}

.section-video__button_left {
  background-position: 9px;
  background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M87.5 111l-47-47M40.5 64l47-47'/%3E%3C/g%3E%3C/svg%3E");
}

.section-video__button_right {
  background-position: 11px;
  background-image: url("data:image/svg+xml,%3Csvg height='128' width='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='10' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M40.5 17l47 47M87.5 64l-47 47'/%3E%3C/g%3E%3C/svg%3E");
}

.section-video__inner {
  position: relative;
}

.section-video__player {
  width: 867px;
  min-height: 450px;
  border: none;
}

.section-video__image {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}

.section-video__button-play {
  @extend %button-default;
  width: 90px;
  height: 90px;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  position: absolute;
  border-radius: 50%;
  background-position: 5px;
  background-color: #cececee0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.356 25.677l38.625 22.3c1.557.899 1.557 3.147 0 4.046l-38.625 22.3c-1.557.899-3.504-.225-3.504-2.023V27.7c0-1.798 1.946-2.922 3.504-2.023z'/%3E%3Cpath d='M69.981 47.977l-38.625-22.3a2.343 2.343 0 00-.716-.259l37.341 21.559c1.557.899 1.557 3.147 0 4.046l-38.625 22.3a2.296 2.296 0 01-1.078.301c.656.938 1.961 1.343 3.078.699l38.625-22.3c1.557-.899 1.557-3.147 0-4.046z'/%3E%3Cpath d='M31.356 25.677l38.625 22.3c1.557.899 1.557 3.147 0 4.046l-38.625 22.3c-1.557.899-3.504-.225-3.504-2.023V27.7c0-1.798 1.946-2.922 3.504-2.023z' fill='%23ffffff' stroke='%23ffffff' stroke-miterlimit='10'/%3E%3C/svg%3E");
  transition: background 0.1s linear;
}

.section-video__button-play:focus {
  opacity: 0.8;
  outline: none;
  background-color: $mainColor;
}

.section-video__button-play:hover {
  opacity: 0.8;
  background-color: $mainColor;
}

.section-video__excerpt {
  margin: 10px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

.section-video__link {
  color: #666666;
  border-bottom: 1px solid #666666;
  text-decoration: none;
}
</style>
