<template>
  <SectionContainer id="capabilities">
    <SectionHeading>Capabilities</SectionHeading>
    <SectionSubheading>More on what I can do</SectionSubheading>

    <div class="capabilities-body">
      <div class="capability">
        <span class="capability__indicator">01.</span>
        <h3 class="capability__heading">Development</h3>
        <div class="capability__body">
          I love working on complex web applications and delivering easy to use,
          beautiful product. I can develop new products from the ground up, or
          adapt and customize existing application.
        </div>
      </div>

      <div class="capability">
        <span class="capability__indicator">02.</span>
        <h3 class="capability__heading">Design</h3>
        <div class="capability__body">
          I design user-centric, modern interfaces for digital products or
          services which helps transfers the brand's strengths and visual assets
          to a product's interface.
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.capabilities-body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  text-align: center;

  @include st-tablet {
    grid-template-columns: 1fr;
  }

  .capability {
    position: relative;
    margin-top: 60px;
    @include st-tablet {
      margin-top: 45px;
    }

    &__indicator {
      z-index: -1;
      position: absolute;
      inset: -90px auto auto 0;

      font-size: 8rem;
      font-weight: var(--fnt-weight-black);

      opacity: 0.2;
      color: var(--clr-primary);

      @include st-tablet {
        font-size: 5rem;
        top: -65px;
        left: 50%;
        transform: translateX(-160px);
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
