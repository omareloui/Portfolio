<template>
  <div class="not-found">
    <Container class="not-found__container">
      <LogoIcon class="not-found__logo" />

      <div class="not-found__body">
        <h1>This page can't be found</h1>

        <div class="not-found__status-code">404 Not Found</div>

        <div class="not-found__links">
          <TheLink to="/" class="link">Go back to homepage</TheLink>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
@use "~~/assets/styles/mixins" as *;

.not-found {
  background: var(--clr-gradient-bg);
  color: var(--clr-text-light);

  &__container {
    display: grid;
    grid-template-rows: auto 1fr;

    padding-top: 30px;
    padding-bottom: 30px;

    min-height: 100vh;
  }

  &__logo {
    width: 70px;
  }

  &__body {
    text-align: center;
    place-self: center;
  }

  h1 {
    font-size: var(--fnt-size-heading);
    line-height: 110%;
    margin-bottom: 20px;
  }

  &__status-code {
    color: var(--clr-text-light-2);
    opacity: 0.8;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  &__links .link {
    font-weight: var(--fnt-weight-normal);
    font-size: 1.2rem;

    > ::v-deep(*) {
      text-decoration: underline;
    }
  }
}
</style>
