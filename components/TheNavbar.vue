<script setup lang="ts">
onMounted(init);
onUnmounted(removeTrackScroll);

const isScrolled = ref(false);

function trackScroll() {
  addEventListener("scroll", handleScroll);
}

function init() {
  handleScroll();
  trackScroll();
}

function removeTrackScroll() {
  removeEventListener("scroll", handleScroll);
}

function handleScroll() {
  if (!scrollY) removeShadow();
  else addShadow();
}

function addShadow() {
  isScrolled.value = true;
}

function removeShadow() {
  isScrolled.value = false;
}
</script>

<template>
  <div class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <Container>
      <Logo />
      <div class="gap"></div>
      <nav>
        <ul>
          <li><TheLink to="#!">Portfolio</TheLink></li>
          <li><TheLink to="#!">About me</TheLink></li>
          <li><TheLink to="#!">Contact</TheLink></li>
        </ul>
      </nav>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.navbar {
  z-index: 9999;
  position: sticky;
  top: 0;

  background: var(--clr-primary);
  color: var(--clr-text-light);

  transition: all ease-in-out 200ms;

  ::v-deep(.container) {
    display: flex;
    align-items: center;
    height: var(--nav-height);
  }

  &--scrolled {
    box-shadow: var(--clr-text-light) 0px 0px 12px -4px;
  }

  .gap {
    flex-grow: 1;
  }

  nav {
    ul {
      list-style: none;
      margin: 0;

      display: flex;
      gap: 20px;
      place-items: center;
      text-align: center;

      li {
        min-width: 90px;
      }
    }
  }
}
</style>
