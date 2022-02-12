<script setup lang="ts">
onMounted(init);
onUnmounted(removeEvents);

const isMobile = ref(false);
const isOpen = ref(false);

const isScrolled = ref(false);
const isBlurred = ref(false);

const navbar = ref(null as null | HTMLElement);

const navLinks = [
  { text: "Portfolio", link: "#projects" },
  { text: "Capabilities", link: "#capabilities" },
  { text: "Contact", link: "#contact" },
];

const navHeight = 75;
const navHeightOnMobile = 50;

function init() {
  onScroll();
  onResize();

  trackScroll();
  trackResize();
  trackClicks();
}

function trackResize() {
  addEventListener("resize", onResize);
}

function trackScroll() {
  addEventListener("scroll", onScroll);
}

function trackClicks() {
  addEventListener("pointerdown", onClick);
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

function onClick(e: PointerEvent) {
  if (!navbar.value) return;
  const path = e.composedPath();
  if (!path.includes(navbar.value)) closeNav();
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

function closeNav() {
  isOpen.value = false;
}

function removeEvents() {
  removeEventListener("scroll", onScroll);
  removeEventListener("resize", onResize);
  removeEventListener("pointerdown", onClick);
}
</script>

<template>
  <div
    ref="navbar"
    class="navbar"
    :class="{
      'navbar--desktop': !isMobile,
      'navbar--mobile': isMobile,
      'navbar--scrolled': isScrolled,
      'navbar--blurred': isBlurred,
      'navbar--is-open': isMobile && isOpen,
    }"
  >
    <div class="content">
      <Container>
        <Logo class="logo" />

        <div class="gap" v-if="!isMobile"></div>

        <BurgerButton
          v-if="isMobile"
          :is-open="isOpen"
          @click="toggleNav"
          class="toggle-button"
        />

        <Teleport :disabled="!isMobile" to=".navbar">
          <nav>
            <ul>
              <li
                v-for="(link, index) in navLinks"
                :key="index"
                @click="closeNav"
              >
                <TheLink :to="link.link">{{ link.text }}</TheLink>
              </li>
            </ul>
          </nav>
        </Teleport>
      </Container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.navbar {
  z-index: 9999;
  position: sticky;
  top: 0;

  color: var(--clr-text-light);
  height: var(--nav-height);

  transition: all ease-in-out 200ms;

  &--scrolled {
    box-shadow: #7534ffbd 0 0 15px 2px;
  }

  .content {
    height: 100%;
    background: var(--clr-primary);
  }

  &.navbar--blurred .content {
    background: rgba(var(--clr-primary-rgb), 0.5);

    backdrop-filter: blur(6px);
  }

  nav {
    ul {
      list-style: none;
      margin: 0;

      display: flex;
      gap: 20px;
    }
  }

  &--desktop {
    ::v-deep(.container) {
      display: flex;
      align-items: center;
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
    ::v-deep(.container) {
      display: grid;
      grid-template-columns: 1fr 50px;
      place-items: center;
    }

    .logo {
      transform: translateX(25px);
    }

    .gap {
      display: none;
    }

    nav {
      @include center-h;
      position: absolute;
      opacity: 0;
      transform: translate(-50%, -150%);
      pointer-events: none;
      user-select: none;
      transition: all 200ms ease-in-out;

      width: 80%;
      padding: 1.2rem;
      margin-top: 10px;

      background: linear-gradient(
        45deg,
        rgba(var(--clr-primary-rgb), 0.9),
        rgba(var(--clr-secondary-rgb), 0.5)
      );
      backdrop-filter: blur(6px);

      border-radius: 10px;

      box-shadow: 0 0 14px 2px rgba(var(--clr-primary-rgb), 0.6);

      ul {
        flex-direction: column;
        place-items: center;
        text-align: center;

        li {
          border-radius: 5px;
          width: 100%;
          transition: all ease-in-out 200ms;
          padding: 0.4rem 0;

          user-select: none;

          ::v-deep(a) {
            width: 100%;
            max-width: 100%;
          }

          &:hover {
            background: var(--clr-primary);
          }
        }
      }
    }

    &.navbar--is-open {
      nav {
        pointer-events: all;
        user-select: all;

        transform: translate(-50%, var(--nav-height));
        opacity: 1;
      }
    }
  }
}
</style>
