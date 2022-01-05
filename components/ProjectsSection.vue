<template>
  <SectionContainer>
    <SectionHeading>Projects</SectionHeading>
    <SectionSubheading>Selected work</SectionSubheading>

    <Grid class="projects" :columns-on-desktop="2">
      <ProjectPreview
        description="testing the description"
        role="full thing"
        image="/link/to/image"
        hex-color="#262e2d"
        title="Odin Leather Store"
      />
    </Grid>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 15px;
}
</style>
