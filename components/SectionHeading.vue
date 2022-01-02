<template>
  <h2 class="heading-section"><slot></slot></h2>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.heading-section {
  font-size: 3rem;
  line-height: 3.3rem;
  @include text-gradient;
}
</style>
