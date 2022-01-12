<template>
  <p><slot></slot></p>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

p {
  @include text-regular;
  padding: 0.6rem 0;
  font-size: var(--fnt-size-normal);

  @include st-tablet {
    text-align: center;
  }
}
</style>
