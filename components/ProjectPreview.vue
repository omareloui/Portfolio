<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  github?: string;
  design?: string;
  image: string;
  technologies: Set<string>;
}

// TODO: add analytics here

defineProps<Props>();
</script>

<template>
  <div class="project-preview">
    <div class="project-preview__content">
      <h3 class="project-preview__title">{{ title }}</h3>

      <p class="project-preview__subtitle">{{ subtitle }}</p>

      <div class="project-preview__description">{{ description }}</div>

      <div class="project-preview__links" v-if="link || github">
        <TheLink v-if="link" :to="link" new-tab>Live site</TheLink>
        <TheLink v-if="github" :to="github" new-tab>GitHub</TheLink>
        <TheLink v-if="design" :to="design" new-tab>Design</TheLink>
      </div>

      <LineBreak
        margin="20px"
        color="rgb(var(--clr-dark-rgb), 0.1)"
        height="1px"
      />

      <div class="project-preview__technologies">
        <component
          class="technology"
          v-for="tech of technologies"
          :key="tech"
          :is="`TechnologyIcon${tech}`"
          hide-title
          no-background
          size="30px"
        />
      </div>
    </div>

    <MockupDesktop
      class="project-preview__mockup"
      :image="image"
      :alt="`${title}'s project preview image.`"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.project-preview {
  position: relative;
  overflow: hidden;
  display: block;

  background: var(--clr-light);
  color: var(--clr-text);

  text-decoration: none;
  box-shadow: 0.1rem 0.1rem 0.3rem rgba(var(--clr-dark-rgb), 0.2);

  padding: 3rem 2rem;
  border-radius: 20px;

  transition: transform ease-in-out 200ms;

  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-areas: "content mockup";
  gap: 20px;

  &__content {
    grid-area: content;
  }

  &__mockup {
    grid-area: mockup;
  }

  &__title {
    font-size: 2.5rem;
    color: var(--clr-primary);
    line-height: 110%;
  }

  &__subtitle {
    color: var(--clr-text-dark-1);
  }

  &__subtitle,
  &__description {
    margin-bottom: 10px;
  }

  &__links {
    > ::v-deep(* > *) {
      text-decoration: underline;
      color: var(--clr-secondary);
    }

    > :not(:last-child) {
      margin-right: 10px;
    }
  }

  &__technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    place-items: center;
  }

  @include st-tablet {
    grid-template-columns: 1fr;
    grid-template-areas: "mockup" "content";
    padding: 2rem 1.2rem;

    &__title,
    &__subtitle,
    &__description,
    &__links {
      text-align: center;
    }

    &__technologies {
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
      justify-content: center;
    }
  }
}
</style>
