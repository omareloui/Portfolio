<script setup lang="ts">
const { gap, noMarginBottom, noMarginTop } = withDefaults(
  defineProps<{
    noMarginTop?: boolean;
    noMarginBottom?: boolean;
    gap?: string;
  }>(),
  { noMarginBottom: false, noMarginTop: false, gap: "30px" }
);
</script>

<template>
  <Container
    tag="section"
    class="section-container"
    :class="{
      'section-container--has-margin-top': !noMarginTop,
      'section-container--has-margin-bottom': !noMarginBottom,
    }"
  >
    <slot></slot>
  </Container>
</template>

<style lang="scss" scoped>
.section-container {
  --v-space: v-bind(gap);

  &--has-margin-top {
    margin-top: var(--v-space);
    padding-top: 0.1px;
  }

  &--has-margin-bottom {
    margin-bottom: var(--v-space);
    padding-bottom: 0.1px;
  }
}
</style>
