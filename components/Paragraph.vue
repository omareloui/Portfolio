<script setup lang="ts">
const { padding } = withDefaults(defineProps<{ padding?: string }>(), {
  padding: "0.6rem 0",
});
</script>

<template>
  <p><slot></slot></p>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

p {
  @include text-regular;

  padding: v-bind(padding);
  font-size: var(--fnt-size-normal);

  @include st-tablet {
    text-align: center;
  }
}
</style>
