<script setup lang="ts">
const { level } = defineProps<{ level: string }>();
</script>

<template>
  <component :is="level" class="heading"><slot></slot></component>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.heading {
  @include st-tablet {
    text-align: center;
  }
}
</style>
