<script setup lang="ts">
const { title, description, role, hexColor, image, lightText } = withDefaults(
  defineProps<{
    title: string;
    description: string;
    role: string;
    hexColor: string;
    image: string;
    lightText?: boolean;
  }>(),
  {
    lightText: false,
  }
);
</script>

<template>
  <div
    class="project-preview"
    :class="{ 'project-preview--light-text': lightText }"
  >
    <small>{{ role }}</small>
    <h3 class="project-preview__title">{{ title }}</h3>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.project-preview {
  background: v-bind(hexColor);
  // color: var(--clr-text-light);

  padding: 1rem 2rem;
  border-radius: 20px;

  min-height: 300px;

  &--light-text {
    color: var(--clr-text-light);
  }

  &__title {
    font-size: 2.5rem;
  }
}
</style>
