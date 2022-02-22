<script setup lang="ts">
import { ProjectPreviewProps } from "~~/@types";

const projects = [
  {
    title: "Alsun Yearbook",
    link: "https://alsun.herokuapp.com",
    description: `
      I had this idea to create a place to gather all my university friends in
      one place to make it easy for us to reach each other after this era ends.
      So I made this Alsun Yearbook and added authentication system to make it
      only available to the people that the Yearbook includes.
    `,
    image: "/images/projects/alsun.png",
    technologies: new Set([
      "Nuxt",
      "Vue",
      "JavaScript",
      "Sass",
      "Pug",

      "Node",
      "MongoDB",

      "RestAPI",
      "JWT",

      "Figma",
    ]),
  },
  {
    title: "Najeh's Portfolio",
    description: `
        Najeh's an awesome photographer. I decided to use his art in my code and
        try new project idea I didn't do before.  A gallery and a photographer's
        portfolio.  On this project I tried something new which is using custom
        components and creating my own routing system which turned out pretty
        okay I'd say.
      `,
    link: "https://najeh.netlify.app",
    image: "/images/projects/najeh.png",
    technologies: new Set([
      "Lit",
      "Vite",
      "TypeScript",
      "Sass",
      "Html",
      "Figma",
    ]),
  },
  {
    title: "LemmeIn",
    description: `
      I have this problem that I keep forgetting which account I use to log into
      whichever site or application, specially if I used oauth (signing with
      third party application like Facebook or Google) to sign with. So I
      needed some way to keep track of this, and I couldn't find any password
      manager that tracks the signing method if I oauthed into an application.
      So I created LemmeIn an accounts manager. Where I can store the passwords
      like any other password manager and on top of this create the option to
      store the oauthed account with the account used to sign with.
    `,
    github: "https://github.com/omareloui/LemmeIn",
    image: "/images/projects/lemme-in.jpg",
    technologies: new Set([
      "Deno",
      "TypeScript",

      "MongoDB",
      "RestAPI",

      "Nuxt",
      "Vue",
      "Sass",
      "Html",

      "Figma",
    ]),
  },
  // {
  //   title: "MusicUtils",
  //   description: "I like to keep my music organized to ",
  //   github: "https://github.com/omareloui/MusicUtils",
  //   image: "/images/projects/music-utils.png",
  //   technologies: new Set(["Python", "JavaScript"]),
  // },
] as ProjectPreviewProps[];
</script>

<template>
  <SectionContainer id="projects">
    <SectionHeading>Projects</SectionHeading>
    <SectionSubheading>Selected work</SectionSubheading>

    <Grid class="projects" gap="30px">
      <ProjectPreview
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      />
    </Grid>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 15px;
}
</style>
