<script setup lang="ts">
import { useSleep } from "~~/composables/useSleep";

const sleep = useSleep();
const isLoaded = ref(false);

async function removeLoader() {
  await sleep(1000);
  isLoaded.value = true;
}

onMounted(removeLoader);
</script>

<template>
  <transition name="loader">
    <div class="loader" v-if="!isLoaded">
      <div class="loader__body">Loading</div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@use "~~/assets/styles/mixins" as *;

.loader {
  z-index: 999999;
  @include size(100%, 100vh);
  background: var(--clr-primary);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;

  color: var(--clr-light);

  &__body {
    color: var(--clr-light);
    position: relative;
    font-size: 3rem;
    &::after {
      content: "";
      width: 5px;
      height: 5px;
      background: currentColor;
      position: absolute;
      bottom: 10px;
      right: -5px;
      animation: loader 1s linear infinite;
    }
  }
}

@keyframes loader {
  0% {
    box-shadow: 10px 0 rgba(var(--clr-light-rgb), 0),
      20px 0 rgba(var(--clr-light-rgb), 0);
  }
  50% {
    box-shadow: 10px 0 rgba(var(--clr-light-rgb), 1),
      20px 0 rgba(var(--clr-light-rgb), 0);
  }
  100% {
    box-shadow: 10px 0 rgba(var(--clr-light-rgb), 1),
      20px 0 rgba(var(--clr-light-rgb), 1);
  }
}
</style>
