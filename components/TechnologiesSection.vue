<script setup lang="ts">
const icons = [
  "Html",
  "Css",
  "JavaScript",
  "Pug",
  "Sass",
  "TypeScript",
  "Lit",
  "TaliWindCss",
  "Vue",
  "Nuxt",
  "ThreeJs",
  "P5Js",
  "WebGL",
  "Jest",
  "PWA",
  "MarkDown",
  "Node",
  "Deno",
  "Python",
  "MongoDB",
  "MySQL",
  "JWT",
  "GraphQL",
  "NPM",
  "PNPM",
  "Git",
  "GitHub",
  "DigitalOcean",
  "Netlify",
  "Heroku",
  "VSCode",
  "Illustrator",
  "Figma",
];
</script>

<template>
  <SectionContainer>
    <SectionHeading>Technologies I use</SectionHeading>
    <SectionSubheading>
      For those who know what they're looking for
    </SectionSubheading>

    <ul class="technologies">
      <li v-for="(icon, index) in icons" :key="index">
        <Component :is="`TechnologyIcon${icon}`" />
      </li>
    </ul>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.technologies {
  list-style: none;
  padding: 1rem 1.5rem;
  margin: 15px 0 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 20px;

  background: var(--clr-primary-gradient);
  border-radius: 10px;
}
</style>
