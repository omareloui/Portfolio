<template>
  <SectionContainer id="projects">
    <SectionHeading>Projects</SectionHeading>
    <SectionSubheading>Selected work</SectionSubheading>

    <Grid class="projects" :columns-on-desktop="2" gap="30px">
      <ProjectPreview
        description="testing the description"
        role="full thing"
        image="/link/to/image"
        hex-color="#262e2d"
        title="Odin Leather Store"
        light-text
      />

      <ProjectPreview
        description=""
        role="full thing"
        image="/link/to/image"
        hex-color="#FFEE58"
        title="Alsun Yearbook"
      />

      <ProjectPreview
        description=""
        role="full thing"
        image="/link/to/image"
        hex-color="#5F6DF2"
        title="LemmeIn"
      />

      <ProjectPreview
        description=""
        role="full thing"
        image="/link/to/image"
        hex-color="#ED244E"
        title="Gemini"
      />
    </Grid>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 15px;
}
</style>
