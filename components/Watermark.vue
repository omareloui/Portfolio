<template>
  <div class="watermark">
    <span class="watermark__first-name">omar</span>
    <span class="watermark__last-name">eloui</span>
  </div>
</template>

<style lang="scss" scoped>
.watermark {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;

  font-family: var(--fnt-watermark);
  opacity: 0.05;
  font-size: 20vw;
  padding: 0 5vw;

  user-select: none;
  pointer-events: none;

  span {
    display: flex;
  }

  &__last-name {
    justify-content: end;
  }
}
</style>
