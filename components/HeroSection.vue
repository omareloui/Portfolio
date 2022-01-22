<template>
  <header>
    <Watermark />
    <SectionContainer no-margin-top>
      <div class="content">
        <Paragraph class="hi">
          Hi there <span class="emoji">👋</span>, I'm Omar.
        </Paragraph>
        <Heading level="h1">I build stuff for the web</Heading>
        <Paragraph class="subtitle">and design, sometimes</Paragraph>
        <Paragraph class="body">
          I'll help you deliver the story you have to the world through web
          applications
        </Paragraph>

        <Grid :columns-on-desktop="2" gap="20px" class="links">
          <TheLink to="#projects" cta large>see my work</TheLink>
          <TheLink to="#capabilities" large>what I can do</TheLink>
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
