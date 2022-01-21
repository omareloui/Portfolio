<script setup lang="ts">
const emit = defineEmits(["close"]);

function close() {
  emit("close");
}
</script>

<template>
  <div class="project-not-available">
    <div class="project-not-available__body">
      <h2 class="heading">The link isn't available yet</h2>
      This project isn't live yet. The link will be provided soon enough.
      <button class="close-button" @click="close">
        <span class="close-button__content"> Okay </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.project-not-available {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  color: var(--clr-text-light);
  background: var(--clr-primary-gradient-opacified);
  backdrop-filter: blur(5px);

  &__body {
    padding: 2rem;
    background: var(--clr-primary-gradient);
    text-align: center;
    max-width: 500px;
    border-radius: 15px;
    @include center;

    display: grid;
    gap: 20px;
    place-items: center;
  }

  .heading {
    font-size: 2rem;
  }

  .close-button {
    border: none;
    border-radius: 999px;
    background: var(--clr-text-light);
    padding: 0.2rem 0.8rem;
    width: 150px;
    height: 30px;

    font-size: var(--fnt-size-link-normal);
    @include text-bold;

    cursor: pointer;
    &__content {
      @include text-gradient;
    }
  }
}
</style>
