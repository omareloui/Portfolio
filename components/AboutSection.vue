<template>
  <SectionContainer id="about">
    <SectionHeading>About Me</SectionHeading>
    <div class="body">
      <div class="image-wrapper">
        <img src="/images/me.jpg" alt="Image of me (Omar Eloui)" />
      </div>

      <article>
        <Paragraph padding="0.1rem 0">
          Hello world! I'm Omar. I'm a full-stack web developer based in Egypt.
          <!-- </Paragraph>

        <Paragraph padding="0.1rem 0"> -->
          My interest in web development started back in 2017, when I started to
          build programs and applications to help me automate stuff I do
          regularly or solve problems in my day-to-day life with code. Since
          then I started sharpening my skills to start working as a freelancer.
        </Paragraph>

        <Paragraph padding="0.1rem 0">
          I'm excited to make the leap and continue refining my skills with the
          right company.
        </Paragraph>

        <Paragraph padding="0.8rem 0 0"
          >Other than developing I enjoy leather work, you can check my
          Instagram
          <TheLink
            underlined
            to="https://instagram.com/odinleatherstore"
            new-tab
            >@odinleatherstore</TheLink
          >.</Paragraph
        >
      </article>
    </div>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

#about {
  .body {
    --image-size: min(30vw, 500px);

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
      position: relative;
      grid-area: image;
      @include size(var(--image-size));
      border-radius: 30px;
      overflow: hidden;

      @include st-tablet {
        width: 100%;
        height: 100%;
      }

      img {
        display: block;
        object-fit: cover;
        border-radius: 30px;
        @include size(100%);
      }

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        @include size(100%);
        border-radius: inherit;
        background: rgb(var(--clr-primary-rgb), 0.25);
      }
    }
  }
}
</style>
