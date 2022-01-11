<script setup lang="ts">
const {} = withDefaults(
  defineProps<{
    columnsOnMobile?: number;
    columnsOnTablet?: number;
    columnsOnDesktop?: number;
    gap?: string;
  }>(),
  {
    columnsOnDesktop: 1,
    columnsOnTablet: 1,
    columnsOnMobile: 1,
    gap: "10px",
  }
);
</script>

<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columnsOnDesktop), 1fr);
  gap: v-bind(gap);

  @include st-tablet {
    grid-template-columns: repeat(v-bind(columnsOnTablet), 1fr);
  }

  @include st-mobile {
    grid-template-columns: repeat(v-bind(columnsOnMobile), 1fr);
  }
}
</style>
