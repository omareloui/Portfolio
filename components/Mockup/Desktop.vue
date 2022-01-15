<script setup lang="ts">
const { image, alt, width } = withDefaults(
  defineProps<{ image: string; alt: string; width?: string }>(),
  { width: "100%" }
);
</script>

<template>
  <div class="desktop-mockup">
    <div class="desktop-mockup__outside">
      <div class="desktop-mockup__inside">
        <img class="desktop-mockup__image" :src="image" :alt="alt" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.desktop-mockup {
  --width: v-bind(width);

  &__outside {
    --padding: max(1.3%, 8px);
    --padding-bottom: max(3%, 12px);

    aspect-ratio: 9/5;
    width: var(--width);
    max-width: 100%;

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

    background: #121212;
    border: 1.5px solid #444444;
    border-radius: 8.5px 8.5px 0px 0px;
  }

  &__image {
    @include size(100%);
    object-fit: cover;
  }
}
</style>
