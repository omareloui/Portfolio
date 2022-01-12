<script setup lang="ts">
const { level } = defineProps<{ level: string }>();
</script>

<template>
  <component :is="level" class="heading"><slot></slot></component>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

h1 {
  @include text-bold;
  font-size: var(--fnt-size-heading);
  line-height: 110%;
}

.heading {
  @include st-tablet {
    text-align: center;
  }
}
</style>
