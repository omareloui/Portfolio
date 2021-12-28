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
    63.18deg,
    var(--clr-gradient-1) 2.08%,
    var(--clr-gradient-2) 24.48%
  );
}
</style>
