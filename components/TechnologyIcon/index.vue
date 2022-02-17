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
  | "Superset";

type TechnologyStack =
  | "Front-End"
  | "Back-End"
  | "Front and Back Ends"
  | "DevOps"
  | "Other";

const { title, category, stack } = defineProps<{
  title: string;
  category: TechnologyCategory;
  stack: TechnologyStack;
}>();
</script>

<template>
  <div class="technology">
    <div class="technology__icon" v-bind="{ title }">
      <slot></slot>
    </div>

    <span
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
  --icon-size: 70px;

  background: var(--clr-body);
  border-radius: 5px;
  padding: 0.2rem;
  margin: 0.5rem;

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
