<script setup lang="ts">
const { title, description, role, hexColor, image } = defineProps<{
  title: string;
  description: string;
  role: string;
  hexColor: string;
  image: string;
}>();
</script>

<template>
  <div class="project-preview">
    <small>{{ role }}</small>
    <h3 class="project-preview__title">{{ title }}</h3>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.project-preview {
  background: v-bind(hexColor);
  color: var(--clr-text-light);

  padding: 1rem 2rem;
  border-radius: 20px;

  min-height: 300px;

  &__title {
    font-size: 2.5rem;
  }
}
</style>
