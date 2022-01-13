<script setup lang="ts">
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <div class="technology-icon" v-bind="{ title }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.technology-icon {
  @include size(60px);
  background: var(--clr-light);
  padding: 0.5rem;
  border-radius: 5px;

  ::v-deep(svg) {
    @include size(100%);
  }
}
</style>
