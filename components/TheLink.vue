<script setup lang="ts">
const { to, underlined, cta } = withDefaults(
  defineProps<{
    to: string;
    underlined?: boolean;
    cta?: boolean;
    large?: boolean;
  }>(),
  {
    large: false,
    underlined: false,
    cta: false,
  }
);
</script>

<template>
  <a
    :href="to"
    :class="{
      'link--underlined': underlined,
      'link--cta': cta,
      'link--large': large,
    }"
  >
    <span class="link__content">
      <slot></slot>
    </span>
  </a>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

a {
  --link-gradient: linear-gradient(
    to right,
    var(--clr-link-gradient-1),
    var(--clr-link-gradient-2)
  );

  display: inline-block;
  max-width: fit-content;

  @include text-bold;

  &.link {
    &--underlined {
      background: var(--link-gradient);

      background-repeat: no-repeat;
      background-size: 100% 0.4rem;
      background-position: 0 80%;
      transition: background 200ms ease-in-out;

      &:hover,
      &:focus {
        background-size: 100% 90%;
      }

      &:focus {
        outline: none;
      }
    }

    &--large {
      font-size: clamp(1.2rem, 6vw, 1.5rem);
      @include text-black;
    }

    &--cta {
      background: var(--clr-text-light);
      color: black;
      padding: 0.2rem 0.8rem;
      border-radius: 999px;
      .link__content {
        @include text-gradient;
      }
    }
  }
  &.link--cta.link--large {
    padding: 0.5rem 1.2rem;
  }
}
</style>
