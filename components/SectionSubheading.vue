<template>
  <div class="subheading" role="doc-subtitle" aria-roledescription="subtitle">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.subheading {
  display: block;
  color: var(--clr-text-dark-1);
  font-size: var(--fnt-size-section-subheading);
  font-style: italic;
  text-align: center;

  @include text-bold;
}
</style>
