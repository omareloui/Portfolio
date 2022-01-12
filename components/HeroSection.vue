<template>
  <header>
    <Watermark />
    <SectionContainer no-margin-top>
      <div class="content">
        <Paragraph class="hi"
          >Hi there <span class="emoji">👋</span>, I'm Omar.</Paragraph
        >
        <Heading level="h1">I build stuff for the web</Heading>
        <Paragraph class="subtitle">and design when it comes to it</Paragraph>
        <Paragraph class="body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          dolorem consequatur provident non eaque, commodi unde corrupti,
          architecto culpa pariatur nam eos quam? In, a tempore eos laborum
          sequi adipisci.
        </Paragraph>

        <Grid :columns-on-desktop="2" gap="20px" class="links">
          <TheLink to="#projects" cta large>see my work</TheLink>
          <TheLink to="#about" large>what I can do</TheLink>
        </Grid>
      </div>
    </SectionContainer>
  </header>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

header {
  --bg: linear-gradient(16deg, var(--clr-secondary) 0, var(--clr-primary) 30%);

  z-index: 1;
  position: relative;
  background: var(--bg);
  width: 100%;
  min-height: calc(100vh - var(--nav-height));
  color: var(--clr-text-light);

  padding-bottom: 3vh;
  padding-top: 3vh;

  .subtitle,
  .hi {
    color: var(--clr-text-light-2);
  }

  .hi {
    font-size: clamp(1.2rem, 10vw, 1.8rem);
  }

  .content {
    max-width: 90vw;

    @include st-desktop {
      width: 100%;
    }
  }

  .links {
    margin-top: 30px;
    max-width: 420px;
    place-items: center;

    @include st-tablet {
      margin: 30px auto 0;
    }
  }

  .emoji {
    color: var(--clr-text-light);
  }
}
</style>
