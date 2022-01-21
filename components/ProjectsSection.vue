<template>
  <SectionContainer id="projects">
    <SectionHeading>Projects</SectionHeading>
    <SectionSubheading>Selected work</SectionSubheading>

    <Grid class="projects" :columns-on-desktop="2" gap="30px">
      <ProjectPreview
        title="Alsun Yearbook"
        link="https://alsun.herokuapp.com"
        role="full thing"
        hex-color="#ffee58"
        logo="Alsun"
        mockup="Desktop"
        mockup-image="/images/projects/alsun.png"
        mockup-styles="width: max(162%, 400px)"
      />

      <ProjectPreview
        title="LemmeIn"
        role="full thing"
        hex-color="#5f6df2"
        logo="LemmeIn"
        :mockup="['Mobile', 'Mobile']"
        :mockup-image="[
          '/images/projects/lemme-in-1.jpg',
          '/images/projects/lemme-in-2.jpg',
        ]"
        mockups-styles="
          display: flex;
          gap: 10px;
          flex-direction: column;
          aspect-ratio: 1/1.18;
          margin-right: auto;
          margin-left: auto;
        "
        :mockup-styles="[
          'width: 60%; position: absolute; top: -4%; left: -20%;',
          'width: 60%; position: absolute; top: 125%; right: -18%; transform: translateY(-100%);',
        ]"
      />

      <!-- <ProjectPreview
        role="full thing"
        hex-color="#262e2d"
        title="Odin Leather Store"
        logo="Odin"
        mockup="Desktop"
        mockup-image="/images/projects/alsun.png"
        mockup-styles="width: max(162%, 400px)"
        light-text
      /> -->

      <!-- <ProjectPreview
        role="full thing"
        hex-color="#ed244e"
        title="Gemini"
        logo="Gemini"
        mockup="Mobile"
        mockup-image="/images/projects/alsun.png"
        mockup-styles="width: 44%"
      /> -->

      <!-- TODO: -->
      <!--
        <ProjectPreview
        role="full thing"
        hex-color="#ffffff"
        title="Najeh's Portfolio"
        logo="Najeh"
        mockup="Desktop"
      /> -->
    </Grid>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 15px;
}
</style>
