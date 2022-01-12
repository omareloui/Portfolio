<script setup lang="ts">
const { size } = withDefaults(defineProps<{ size?: string }>(), {
  size: "14px",
});
</script>

<template>
  <span></span>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

span {
  --color: var(--clr-primary);
  --color-rgb: var(--clr-primary-rgb);

  display: inline-block;
  background: var(--color);

  border-radius: 50%;
  @include size(v-bind(size));

  box-shadow: 0 0 0 0 rgba(var(--color), 1);

  transform: scale(1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(var(--color-rgb), 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(var(--color-rgb), 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(var(--color-rgb), 0);
  }
}
</style>
