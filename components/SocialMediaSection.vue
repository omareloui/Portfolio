<template>
  <Container class="social-media">
    <GitHubLink />
    <LinkedInLink />
  </Container>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.social-media {
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  @include st-tablet {
    justify-content: center;
  }
}
</style>
