<template>
  <SectionContainer id="about">
    <SectionHeading>About Me</SectionHeading>
    <SectionSubheading>More on me</SectionSubheading>
    <div class="body">
      <div class="image-wrapper">
        <img src="/images/me.jpg" alt="Image of me (Omar Eloui)" />
      </div>

      <article>
        <Paragraph padding="0.1rem 0">
          Hello world! I'm Omar. I'm a full-stack web developer based in Egypt.
        </Paragraph>

        <Paragraph padding="0.1rem 0">
          My interest in web development started back in 2017, when I started to
          build scripts and applications to help me automate tasks I do
          regularly or solve problems in my day-to-day life. Since then and I
          started sharpening my skills to start working as a freelancer.
        </Paragraph>

        <Paragraph padding="0.1rem 0">
          I'm excited to make the leap and continue refining my skills with the
          right company.
        </Paragraph>

        <Paragraph>
          Other than developing I enjoy leatherwork, you can check some of my
          projects on Instagram
          <TheLink
            underlined
            to="https://instagram.com/odinleatherstore"
            new-tab
            >@odinleatherstore.</TheLink
          >
        </Paragraph>
      </article>
    </div>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

#about {
  .body {
    --image-size: min(30vw, 350px);

    display: grid;
    grid-template-columns: 1fr var(--image-size);
    grid-template-areas: "body image";
    place-items: center;
    gap: 30px;

    margin-top: 20px;

    @include st-tablet {
      grid-template-columns: 1fr;
      grid-template-areas: "image" "body";
    }

    article {
      grid-area: body;
    }

    .image-wrapper {
      --border-width: 5px;

      position: relative;
      grid-area: image;

      border: solid var(--border-width) transparent;
      border-radius: 30px;

      width: calc(var(--image-size) - (var(--border-width) * 2));
      aspect-ratio: 1;

      @include st-tablet {
        --image-size: 80%;
      }

      img {
        object-fit: cover;
        border-radius: 28px;
        @include center;
        @include size(100%);
      }

      &::after,
      &::before {
        content: "";
        position: absolute;
        inset: 0;
      }

      &::before {
        z-index: -1;
        margin: calc(var(--border-width) * -1);
        background: var(--clr-primary-gradient);
        border-radius: inherit;
      }

      &::after {
        background: rgb(var(--clr-primary-rgb), 0.25);
        border-radius: 28px;
        @include center;
        @include size(100%);
      }
    }
  }
}
</style>
