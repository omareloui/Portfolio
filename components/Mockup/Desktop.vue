<script setup lang="ts">
const { image, alt } = defineProps<{ image: string; alt: string }>();
</script>

<template>
  <div class="desktop-mockup">
    <div class="desktop-mockup__outside">
      <div class="desktop-mockup__inside">
        <img class="desktop-mockup__image" :src="image" :alt="alt" />
      </div>
    </div>
    <div class="desktop-mockup__body">
      <div class="desktop-mockup__body-gap"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.desktop-mockup {
  &__outside {
    --padding: max(1.3%, 4px);
    --padding-bottom: max(3%, 10px);

    aspect-ratio: 9/5;
    width: 85%;
    max-width: 100%;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    padding: var(--padding) var(--padding) var(--padding-bottom);

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 70.66%,
        rgba(51, 51, 51, 0.643) 90.82%,
        rgba(0, 0, 0, 0.94) 102.78%
      ),
      linear-gradient(115.51deg, #333333 0%, #596368 53.13%, #333333 100%);

    border: 1.5px solid #333333;
    border-radius: 17px;
  }

  &__inside {
    @include size(100%);

    overflow: hidden;

    border: 1.5px solid #444444;
    border-radius: 8.5px 8.5px 0px 0px;
  }

  &__image {
    @include size(100%);
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  &__body {
    position: relative;
    height: 15px;
    border-radius: 0px 0px 50px 50px / 0px 0px 10px 10px;
    background: linear-gradient(
        180deg,
        rgba(102, 102, 102, 0.3) 0%,
        rgba(102, 102, 102, 0.3) 50%,
        rgba(0, 0, 0, 0.15) 54.17%,
        rgba(0, 0, 0, 0.3) 100%
      ),
      linear-gradient(270deg, #212121 0%, #555555 50%, #212121 100%);
  }

  &__body-gap {
    @include center-h;
    @include size(15%, 45%);

    top: 0;

    border-radius: 0px 0px 70px 70px;
    background: linear-gradient(
        90deg,
        #333333 0%,
        rgba(51, 51, 51, 0.42) 13.02%,
        rgba(51, 51, 51, 0.118947) 93.23%,
        rgba(51, 51, 51, 0.83) 100%
      ),
      linear-gradient(
        180deg,
        #999999 0%,
        #777777 15.1%,
        #444444 60.94%,
        #333333 82.29%,
        #222222 100%
      ),
      #c4c4c4;
  }
}
</style>
