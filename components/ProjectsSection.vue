<script setup lang="ts">
import { ProjectPreviewProps } from "~~/@types";

const isProjectLinkAvailablePopupShown = ref(false);

const projects = [
  {
    title: "Alsun Yearbook",
    link: "https://alsun.herokuapp.com",
    role: "Responsible for the full application",
    hexColor: "#ffee58",
    logo: "Alsun",
    mockup: ["Desktop"],
    mockupImage: ["/images/projects/alsun.png"],
    mockupStyles: ["width: max(130%, 400px)"],
  },
  {
    title: "Najeh's Portfolio",
    link: "https://najeh.netlify.app",
    role: "Responsible for the full application",
    hexColor: "#121212",
    logo: "Najeh",
    lightText: true,
    mockup: ["Desktop"],
    mockupImage: ["/images/projects/najeh.png"],
    mockupStyles: ["width: max(130%, 400px)"],
  },
  {
    title: "LemmeIn",
    role: "Responsible for the full application",
    hexColor: "#5f6df2",
    logo: "LemmeIn",
    mockup: ["Mobile", "Mobile"],
    mockupImage: [
      "/images/projects/lemme-in-1.jpg",
      "/images/projects/lemme-in-2.jpg",
    ],
    mockupsStyles: `
      display: flex;
      gap: 10px;
      flex-direction: column;
      aspect-ratio: 1/1.18;
      margin-right: auto;
      margin-left: auto;
    `,
    mockupStyles: [
      "width: 60%; position: absolute; top: -4%; left: -20%;",
      "width: 60%; position: absolute; top: 125%; right: -18%; transform: translateY(-100%);",
    ],
  },
  // {
  //   role: "Responsible for the full application",
  //   hexColor: "#262e2d",
  //   title: "Odin Leather Store",
  //   logo: "Odin",
  //   mockup: "Desktop",
  //   mockupImage: "/images/projects/alsun.png",
  //   mockupStyles: "width: max(162%, 400px)",
  //   lightText: true,
  // },
  // {
  //   role: "Responsible for the full application",
  //   hexColor: "#ed244e",
  //   title: "Gemini",
  //   logo: "Gemini",
  //   mockup: "Mobile",
  //   mockupImage: "/images/projects/alsun.png",
  //   mockupStyles: "width: 44%",
  // },
  //
] as ProjectPreviewProps[];
</script>

<template>
  <SectionContainer id="projects">
    <SectionHeading>Projects</SectionHeading>
    <SectionSubheading>Selected work</SectionSubheading>

    <Grid class="projects" :columns-on-desktop="2" gap="30px">
      <ProjectPreview
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
        @show-no-link-popup="isProjectLinkAvailablePopupShown = true"
      />
    </Grid>
  </SectionContainer>

  <Transition name="fade">
    <ProjectNotAvailablePopup
      v-if="isProjectLinkAvailablePopupShown"
      @close="isProjectLinkAvailablePopupShown = false"
    />
  </Transition>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 15px;
}
</style>
