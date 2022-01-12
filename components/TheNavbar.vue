<script setup lang="ts">
onMounted(init);
onUnmounted(removeTrackScroll);

const isScrolled = ref(false);
const isBlurred = ref(false);

const navHeight = 75;

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
  if (scrollY >= navHeight) blur();
  else unBlur();

  if (!scrollY) markAsNotScrolled();
  else markAsScrolled();
}

function markAsScrolled() {
  isScrolled.value = true;
}

function markAsNotScrolled() {
  isScrolled.value = false;
}

function blur() {
  isBlurred.value = true;
}

function unBlur() {
  isBlurred.value = false;
}
</script>

<template>
  <div
    class="navbar"
    :class="{ 'navbar--scrolled': isScrolled, 'navbar--blurred': isBlurred }"
  >
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

  background: linear-gradient(
    10deg,
    var(--clr-primary) 80%,
    var(--clr-secondary) 100%
  );
  color: var(--clr-text-light);

  transition: all ease-in-out 200ms;

  ::v-deep(.container) {
    display: flex;
    align-items: center;
    height: var(--nav-height);
  }

  &--scrolled {
    box-shadow: #ebebeb4f 0 0 4px 0px;
  }

  &--blurred {
    background: linear-gradient(
      10deg,
      rgba(var(--clr-primary-rgb), 0.8) 80%,
      rgba(var(--clr-secondary-rgb), 0.8) 100%
    );
    backdrop-filter: blur(6px);
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
      justify-content: flex-end;
      align-items: center;
      text-align: right;

      li {
        min-width: 90px;
      }
    }
  }
}
</style>
