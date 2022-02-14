<script setup lang="ts">
function scrollToTop() {
  scrollTo(0, 0);
}
</script>

<template>
  <ClickableElement tag="div" class="logo" @click="scrollToTop">
    <LogoIcon />
  </ClickableElement>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/mixins" as *;

.logo {
  display: flex;
  place-items: center;
  height: var(--nav-height);

  svg {
    @include size(clamp(60px, 20vw, 80px), clamp(37.5px, 15vw, 50px));
  }

  @include st-mobile {
    svg {
      @include size(45px, 28.125px);
    }
  }
}
</style>
