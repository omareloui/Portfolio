<script setup lang="ts">
const { isOpen } = defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="burger"
    :class="{ 'burger--open': isOpen }"
    @click="emit('click')"
  >
    <span class="burger__line burger__line--1"></span>
    <span class="burger__line burger__line--2"></span>
    <span class="burger__line burger__line--3"></span>
  </button>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.burger {
  --line-height: 3px;
  --gap: 4px;

  position: relative;

  background: none;
  border: none;
  cursor: pointer;
  @include size(25px, calc(var(--line-height) * 3 + var(--gap) * 2));

  &:hover {
    .burger__line {
      &--2,
      &--3 {
        width: 100%;
      }
    }
  }

  &__line {
    display: block;
    position: absolute;
    background: var(--clr-text-light);
    @include size(100%, var(--line-height));

    transition: all ease-in-out 200ms;

    &--1 {
      top: 0;
    }

    &--2 {
      top: calc(var(--line-height) + var(--gap));
      width: 65%;
    }

    &--3 {
      top: calc(var(--line-height) * 2 + var(--gap) * 2);
      width: 80%;
    }
  }

  &--open {
    .burger__line {
      &--1 {
        top: 50%;
        transform: rotate(225deg);
      }

      &--2 {
        width: 0;
        opacity: 0;
      }

      &--3 {
        top: 50%;
        width: 100%;
        transform: rotate(315deg);
      }
    }
  }
}
</style>
