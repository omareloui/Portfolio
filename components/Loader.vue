<script setup lang="ts">
import { useSleep } from "~~/composables/useSleep";

const sleep = useSleep();
const isLoaded = ref(false);

async function removeLoader() {
  await sleep(500);
  isLoaded.value = true;
}

onMounted(removeLoader);
</script>

<template>
  <transition name="loader">
    <div class="loader" v-if="!isLoaded">
      <div class="loader__body">loading...</div>
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
}
</style>
