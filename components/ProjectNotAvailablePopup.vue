<script setup lang="ts">
const emit = defineEmits(["close"]);
const body = ref(null as null | HTMLElement);

function close() {
  emit("close");
}

onMounted(init);
onUnmounted(destroy);

function init() {
  addEventListener("pointerdown", onClick);
}

function onClick(e: PointerEvent) {
  if (!body.value) return;

  const hitBody = e.composedPath().includes(body.value);
  if (!hitBody) close();
}

function destroy() {
  removeEventListener("pointerdown", onClick);
}
</script>

<template>
  <div class="project-not-available">
    <div class="project-not-available__body" ref="body">
      <h2 class="heading">The link isn't available yet</h2>
      This project isn't live yet. The link will be provided soon enough.
      <ButtonBase class="close-button" @click="close">
        <span class="close-button__content"> Okay </span>
      </ButtonBase>
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
  backdrop-filter: blur(12px);

  font-size: 1.2rem;

  @include st-mobile {
    font-size: 1rem;
  }

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

    @include st-mobile {
      font-size: 1.4rem;
    }
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

    &__content {
      @include text-gradient;
    }
  }
}
</style>
