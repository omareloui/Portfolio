<script setup lang="ts">
const { leftOnTablet } = withDefaults(
  defineProps<{ leftOnTablet?: boolean }>(),
  {
    leftOnTablet: false,
  }
);
</script>

<template>
  <h2
    class="heading-section"
    :class="{ 'heading-section--left-on-desktop': leftOnTablet }"
  >
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.heading-section {
  font-size: var(--fnt-size-section-heading);
  line-height: 3.8rem;
  text-align: center;
  @include text-black;
  @include text-gradient;

  margin: auto;

  &--left-on-desktop {
    @include lt-tablet {
      text-align: left;
      margin: unset;
    }
  }
}
</style>
