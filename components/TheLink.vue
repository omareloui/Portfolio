<script setup lang="ts">
const { to, underlined, cta, gradient } = withDefaults(
  defineProps<{
    to: string;
    newTab?: boolean;
    underlined?: boolean;
    cta?: boolean;
    large?: boolean;
    gradient?: boolean;
  }>(),
  {
    newTab: false,
    large: false,
    underlined: false,
    cta: false,
    gradient: false,
  }
);
</script>

<template>
  <a
    :href="to"
    class="link"
    :class="{
      'link--underlined': underlined,
      'link--cta': cta,
      'link--large': large,
      'link--gradient': gradient,
    }"
    :target="newTab ? '_blank' : undefined"
  >
    <span class="link__content">
      <slot></slot>
    </span>
  </a>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.link {
  --link-gradient: linear-gradient(
    to right,
    var(--clr-link-gradient-1),
    var(--clr-link-gradient-2)
  );

  display: inline-block;
  max-width: fit-content;

  @include text-bold;

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
    font-size: var(--fnt-size-link-large);
    @include text-bold;
  }

  &--gradient {
    background: var(--clr-primary-gradient);
    border-radius: 999px;
    padding: 0.2rem 0.8rem;
    color: var(--clr-text-light);
  }

  &--cta {
    background: var(--clr-text-light);
    padding: 0.2rem 0.8rem;
    border-radius: 999px;
    .link__content {
      @include text-gradient;
    }
  }

  &__content {
    display: inline-block;
  }

  &.link--cta.link--large,
  &.link--gradient.link--large {
    padding: 0.5rem 1.2rem;
  }
}
</style>
