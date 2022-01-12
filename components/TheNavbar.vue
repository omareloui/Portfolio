<script setup lang="ts">
onMounted(init);
onUnmounted(removeEvents);

const isMobile = ref(false);
const isOpen = ref(false);

const isScrolled = ref(false);
const isBlurred = ref(false);

const navLinks = [
  { text: "Portfolio", link: "#!" },
  { text: "About Me", link: "#!" },
  { text: "Contact", link: "#!" },
];

const navHeight = 75;
const navHeightOnMobile = 50;

function init() {
  onScroll();
  onResize();

  trackScroll();
  trackResize();
}

function trackResize() {
  addEventListener("resize", onResize);
}

function trackScroll() {
  addEventListener("scroll", onScroll);
}

function onResize() {
  if (innerWidth <= 480) isMobile.value = true;
  else isMobile.value = false;
}

function onScroll() {
  if (!isMobile.value) {
    if (scrollY >= navHeight) blur();
    else unBlur();
  } else {
    if (scrollY >= navHeightOnMobile) blur();
    else unBlur();
  }

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

function toggleNav() {
  isOpen.value = !isOpen.value;
}

function removeEvents() {
  removeEventListener("scroll", onScroll);
  removeEventListener("resize", onResize);
}
</script>

<template>
  <div
    class="navbar"
    :class="{
      'navbar--desktop': !isMobile,
      'navbar--mobile': isMobile,
      'navbar--scrolled': isScrolled,
      'navbar--blurred': isBlurred,
      'navbar--is-open': isMobile && isOpen,
    }"
  >
    <Container>
      <Logo class="logo" />

      <div class="gap" v-if="!isMobile"></div>

      <BurgerButton
        v-if="isMobile"
        :is-open="isOpen"
        @click="toggleNav"
        class="toggle-button"
      />

      <nav>
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <TheLink :to="link.link">{{ link.text }}</TheLink>
          </li>
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

  nav {
    ul {
      list-style: none;
      margin: 0;

      display: flex;
      gap: 20px;

      li {
        min-width: 90px;
      }
    }
  }

  &--desktop {
    ::v-deep(.container) {
      display: flex;
      align-items: center;
      height: var(--nav-height);
    }

    .gap {
      flex-grow: 1;
    }

    nav {
      ul {
        justify-content: flex-end;
        align-items: center;
        text-align: right;
      }
    }
  }

  &--mobile {
    height: var(--nav-height-on-mobile);

    ::v-deep(.container) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &.navbar--scrolled {
      box-shadow: none;
    }

    .toggle-button {
      position: absolute;
      top: 50%;
      right: var(--container-padding);
      transform: translate(-50%, -50%);
    }

    nav {
      opacity: 0;
      transform: translateY(-100%);
      pointer-events: none;
      user-select: none;
      transition: all 200ms ease-in-out;

      padding: 0.8rem;
      width: 100vw;

      background: rgba(var(--clr-primary-rgb), 0.9);
      backdrop-filter: blur(6px);

      ul {
        flex-direction: column;
        place-items: center;
        text-align: center;
      }
    }

    &.navbar--is-open {
      nav {
        pointer-events: all;
        user-select: all;

        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
