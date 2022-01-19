<template>
  <SectionContainer id="projects">
    <SectionHeading>Projects</SectionHeading>
    <SectionSubheading>Selected work</SectionSubheading>

    <Grid class="projects" :columns-on-desktop="2" gap="30px">
      <!-- <ProjectPreview
        description="testing the description"
        role="full thing"
        hex-color="#262e2d"
        title="Odin Leather Store"
        light-text
      />
 -->
      <ProjectPreview
        description=""
        role="full thing"
        hex-color="#FFEE58"
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
        hex-color="#5F6DF2"
        title="LemmeIn"
        logo="Alsun"
        mockup="Mobile"
        mockup-image="/images/projects/alsun.png"
        mockup-alt="Lemme In's preview image"
        mockup-styles="width: 44%"
      />

      <!-- <ProjectPreview
        description=""
        role="full thing"
        hex-color="#ED244E"
        title="Gemini"
      /> -->
    </Grid>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 15px;
}
</style>
