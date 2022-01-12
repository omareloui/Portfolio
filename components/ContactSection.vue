<template>
  <SectionContainer id="contact">
    <SectionHeading>Need a developer?</SectionHeading>

    <div class="section-body">
      <div class="section-body__left">
        <Paragraph
          ><ActionCircle /> I'm currently available for work.</Paragraph
        >
        <Paragraph>
          <TheLink to="mailto:omareloui@hotmail.com" gradient large class="mail"
            >Send me a message</TheLink
          >
        </Paragraph>
      </div>

      <div class="section-body__right">
        <div class="contact-info">
          <Paragraph>omareloui@hotmail.com</Paragraph>
          <Paragraph>+0201119447500</Paragraph>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.section-body {
  display: grid;
  grid-template-columns: 1fr auto;

  @include st-tablet {
    grid-template-columns: 1fr;
  }

  a.mail {
    font-weight: var(--fnt-weight-regular);
  }

  .contact-info {
    color: var(--clr-text-dark-1);
    text-align: right;

    > * {
      font-size: var(--fnt-size-small);
      padding: 0.1rem;
    }
  }
}
</style>
