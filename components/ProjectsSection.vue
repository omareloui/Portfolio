<script setup lang="ts">
const projects = useProjects();
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
