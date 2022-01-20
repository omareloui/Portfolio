<template>
  <SectionContainer id="projects">
    <SectionHeading>Projects</SectionHeading>
    <SectionSubheading>Selected work</SectionSubheading>

    <Grid class="projects" :columns-on-desktop="2" gap="30px">
      <ProjectPreview
        description=""
        role="full thing"
        hex-color="#262e2d"
        title="Odin Leather Store"
        logo="Odin"
        mockup="Desktop"
        mockup-image="/images/projects/alsun.png"
        mockup-alt="Odin's preview image"
        mockup-styles="width: max(162%, 400px)"
        light-text
      />

      <ProjectPreview
        description=""
        role="full thing"
        hex-color="#5f6df2"
        title="LemmeIn"
        logo="LemmeIn"
        mockup="Mobile"
        mockup-image="/images/projects/alsun.png"
        mockup-alt="Lemme In's preview image"
        mockup-styles="width: 44%"
      />

      <ProjectPreview
        description=""
        role="full thing"
        hex-color="#ffee58"
        title="Alsun Yearbook"
        logo="Alsun"
        mockup="Desktop"
        mockup-image="/images/projects/alsun.png"
        mockup-alt="Alsun yearbook's preview image"
        mockup-styles="width: max(162%, 400px)"
      />

      <ProjectPreview
        description=""
        role="full thing"
        hex-color="#ed244e"
        title="Gemini"
        logo="Gemini"
        mockup="Mobile"
        mockup-image="/images/projects/alsun.png"
        mockup-alt="Gemini's preview image"
        mockup-styles="width: 44%"
      />
    </Grid>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 15px;
}
</style>
