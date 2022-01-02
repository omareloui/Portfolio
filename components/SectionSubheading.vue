<template>
  <div class="subheading"><slot></slot></div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.subheading {
  display: block;
  color: var(--clr-text-dark-1);
  font-size: 1rem;
  font-style: italic;
  @include text-bold;
}
</style>
