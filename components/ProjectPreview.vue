<script setup lang="ts">
import type { ProjectPreviewProps, Mockup } from "~~/@types";

interface Props {
  title: string;
  link?: string;
  role: string;
  hexColor: string;
  lightText?: boolean;

  height?: string;

  logo: string;

  mockup: Mockup[];
  mockupImage: string[];
  mockupStyles: string[];

  mockupsStyles?: string;
}

const {
  title,
  link,
  role,
  hexColor,
  lightText,
  height,
  logo,
  mockup,
  mockupImage,
  mockupStyles,
  mockupsStyles,
} = withDefaults(defineProps<Props>(), {
  lightText: false,
  height: "min-content",
});

const emit = defineEmits(["show-no-link-popup"]);

interface MockInfo {
  mockup: Mockup;
  image: string;
  styles: string;
}

const mockupsInfo = mockup.map((mockup, i) => ({
  mockup,
  image: mockupImage[i],
  styles: mockupStyles[i],
})) as MockInfo[];
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :target="(link && '_blank') || undefined"
    :href="link"
    class="project-preview"
    :class="{ 'project-preview--light-text': lightText }"
    @click="!link && emit('show-no-link-popup')"
  >
    <component v-if="logo" class="project-preview__logo" :is="`Logo${logo}`" />

    <small class="project-preview__role">{{ role }}</small>
    <h3 class="project-preview__title">{{ title }}</h3>

    <div class="project-preview__mockups" :style="mockupsStyles">
      <component
        v-if="mockupsInfo.length"
        v-for="(mockup, index) of mockupsInfo"
        :key="index"
        class="project-preview__mockup"
        :is="`Mockup${mockup.mockup}`"
        :image="mockup.image"
        :style="mockup.styles"
        :alt="`${title}'s project preview image.`"
      />
    </div>
  </component>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.project-preview {
  --height: v-bind(height);

  position: relative;
  overflow: hidden;
  display: block;

  background: v-bind(hexColor);
  color: var(--clr-text);
  text-decoration: none;
  box-shadow: 0 0 1.5rem rgba(var(--clr-dark-rgb), 0.4);

  padding: 3rem 2rem;
  border-radius: 20px;

  height: var(--height);

  cursor: pointer;

  transition: transform ease-in-out 200ms;

  &:hover {
    transform: scale(1.02);
  }

  &--light-text {
    color: var(--clr-text-light);
  }

  &__title,
  &__role,
  &__mockups {
    isolation: isolate;
  }

  &__title {
    font-size: 2.5rem;
  }

  &__mockups {
    position: relative;
    height: 100%;
    margin-top: 20px;
  }

  &__logo {
    @include center;
    @include size(80%);

    opacity: 0.2;
  }
}
</style>
