<template>
  <SectionContainer id="capabilities">
    <SectionHeading>Capabilities</SectionHeading>
    <SectionSubheading>More on what I can do</SectionSubheading>

    <div class="capabilities-body">
      <div class="capability">
        <span class="capability__emoji">😍</span>
        <h3 class="capability__heading">UX/UI Design</h3>
        <ul class="capability__body">
          <li>User Experience Design</li>
          <li>Rapid Prototyping</li>
          <li>Usability Testing</li>
          <li>UX Reviews</li>
          <li>Interaction Design</li>
          <li>Customer journeys</li>
        </ul>
      </div>

      <div class="capability">
        <span class="capability__emoji">🎨</span>
        <h3 class="capability__heading">Product Design</h3>
        <ul class="capability__body">
          <li>User Interface Design</li>
          <li>Visual Design</li>
          <li>Visual Identities</li>
          <li>Design Systems</li>
          <li>Responsive & Mobile Websites</li>
          <li>Modular Grid Systems</li>
          <li>Brand guidelines</li>
        </ul>
      </div>

      <div class="capability">
        <span class="capability__emoji">👨🏼‍💻</span>
        <h3 class="capability__heading">Development</h3>
        <ul class="capability__body">
          <li>Front-end development</li>
          <li>Responsive & Mobile Websites</li>
          <li>Mobile apps</li>
          <li>Animations</li>
          <li>SaaS applications</li>
          <li>Platform solutions</li>
        </ul>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.capabilities-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  margin-top: 20px;

  text-align: center;

  @include st-tablet {
    grid-template-columns: 1fr;
  }

  .capability {
    &__emoji {
      font-size: 2rem;

      @include st-mobile {
        font-size: 1.8rem;
      }
    }

    &__heading {
      font-size: 2rem;
      color: var(--clr-secondary);

      @include st-mobile {
        font-size: 1.8rem;
      }
    }

    &__body {
      list-style: none;

      margin: 0;
      padding: 0.6rem 0;

      @include text-regular;
      font-size: var(--fnt-size-normal);
      color: var(--clr-text-dark-1);

      @include st-tablet {
        text-align: center;
      }
    }
  }
}
</style>
