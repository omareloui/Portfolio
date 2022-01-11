<script setup lang="ts">
const { to, underlined, cta } = withDefaults(
  defineProps<{
    to: string;
    underlined?: boolean;
    cta?: boolean;
  }>(),
  {
    underlined: false,
    cta: false,
  }
);
</script>

<template>
  <a :href="to" :class="{ 'link--underlined': underlined, 'link--cta': cta }">
    <span class="link--content">
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

    &--cta {
      background: var(--clr-text-light);
      color: black;
      padding: 0.2rem 0.8rem;
      border-radius: 999px;
      .link--content {
        @include text-gradient;
      }
    }
  }
}
</style>
