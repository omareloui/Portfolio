<script setup lang="ts">
const {
  title,
  description,
  role,
  hexColor,
  lightText,
  logo,
  mockup,
  mockupImage,
  mockupAlt,
  mockupStyles,
} = withDefaults(
  defineProps<{
    title: string;
    description: string;
    role: string;
    hexColor: string;
    lightText?: boolean;

    logo?: string;
    mockup?: "Desktop" | "Mobile";
    mockupImage?: string;
    mockupAlt?: string;
    mockupStyles?: string;
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
    <component v-if="logo" class="project-preview__logo" :is="`Logo${logo}`" />

    <small class="project-preview__role">{{ role }}</small>
    <h3 class="project-preview__title">{{ title }}</h3>

    <component
      v-if="mockup"
      class="project-preview__mockup"
      :is="`Mockup${mockup}`"
      :image="mockupImage"
      :style="mockupStyles"
      :alt="mockupAlt"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.project-preview {
  position: relative;
  overflow: hidden;

  background: v-bind(hexColor);

  padding: 3rem 2rem;
  border-radius: 20px;

  height: min-content;

  &--light-text {
    color: var(--clr-text-light);
  }

  &__title,
  &__role,
  &__mockup {
    isolation: isolate;
  }

  &__title {
    font-size: 2.5rem;
  }

  &__mockup {
    width: 100%;
    margin-top: 20px;
  }

  &__logo {
    position: absolute;
    inset: 0;
    margin: auto;

    @include size(80%);
  }
}
</style>
