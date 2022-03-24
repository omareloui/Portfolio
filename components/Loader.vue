<script setup lang="ts">
import { useSleep } from "~~/composables/useSleep";

const sleep = useSleep();
const isLoaded = ref(false);

async function removeLoader() {
  await sleep(1000);
  isLoaded.value = true;
  useMeta({
    bodyAttrs: { style: "--body-y-overflow: auto" },
  });
}

onMounted(removeLoader);
</script>

<template>
  <transition name="loader">
    <div class="loader" v-if="!isLoaded">
      <LogoIcon class="loader__logo" />
      <div class="loader__spinner"></div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@use "~~/assets/styles/mixins" as *;

.loader {
  z-index: 999999;
  @include size(100%, 100vh);
  background: var(--clr-primary-gradient);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;

  &__logo {
    @include center;
    opacity: 0.03;
  }

  &__spinner {
    @include size(min(30vw, 200px));
    border: 5px solid var(--clr-light);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    animation: rotation 1s linear infinite;

    &:after {
      content: "";
      @include center;
      @include size(min(calc(30vw - 20px), calc(200px - 20px)));
      border-radius: 50%;
      border: 5px solid transparent;
      border-bottom-color: var(--clr-secondary);
    }
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
