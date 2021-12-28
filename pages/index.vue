<script setup lang="ts">
useMeta({
  title: "omar eloui | web developer",
});
</script>

<template>
  <main>
    <Logo />
    <Watermark />
    <LandingHeading />
    <ContactBlock />
    <GitHubLink />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 0.1px;
  overflow: hidden;

  min-height: 100vh;
  color: var(--clr-text);
  background: linear-gradient(
    65deg,
    var(--clr-gradient-1) 0%,
    var(--clr-gradient-2) 25%
  );
}

@media screen and (max-width: 600px) {
  main {
    background: linear-gradient(
      30deg,
      var(--clr-gradient-1) 0%,
      var(--clr-gradient-2) 40%
    );
  }
}
</style>
