<script setup lang="ts">
type TechnologyCategory =
  | "Development Tool"
  | "Framework"
  | "Language"
  | "Preprocessor"
  | "Test Framework"
  | "Version Control System"
  | "VSC Cloud Hosting Service"
  | "Run Time For JS"
  | "Cloud Service"
  | "Design Tool"
  | "API"
  | "Auth System"
  | "DataBase"
  | "Package Manger"
  | "3D Development"
  | "PWA"
  | "Superset"
  | "Build Tool";

type TechnologyStack =
  | "Front-End"
  | "Back-End"
  | "Front and Back Ends"
  | "DevOps"
  | "Other";

const { title, category, stack, size, hideTitle } = withDefaults(
  defineProps<{
    title: string;
    category: TechnologyCategory;
    stack: TechnologyStack;
    size?: string;
    hideTitle?: boolean;
    noBackground?: boolean;
  }>(),
  {
    size: "70px",
    hideTitle: false,
    noBackground: false,
  }
);
</script>

<template>
  <div class="technology" :class="{ 'technology--no-bg': noBackground }">
    <div class="technology__icon" v-bind="{ title }">
      <slot></slot>
    </div>

    <span
      v-if="!hideTitle"
      class="technology__title"
      :data-category="category"
      :data-stack="stack"
    >
      {{ title }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.technology {
  --icon-size: v-bind(size);

  background: var(--clr-body);
  border-radius: 5px;
  padding: 0.2rem;
  margin: 0.5rem;

  &--no-bg {
    background: transparent;
    border-radius: 0;
    padding: 0;
    margin: 0;

    .technology__icon {
      padding: 0;
    }
  }

  &__icon {
    @include size(var(--icon-size));
    padding: 0.5rem 0.7rem 0;

    ::v-deep(svg) {
      @include size(100%);
    }
  }

  &__title {
    display: inline-block;

    text-align: center;
    max-width: var(--icon-size);
    width: 100%;
    margin-top: 5px;

    font-family: var(--fnt-main);
    font-size: var(--fnt-size-x-small);
    font-weight: var(--fnt-weight-regular);

    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
