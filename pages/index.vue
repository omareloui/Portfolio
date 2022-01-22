<script setup lang="ts">
useMeta({
  title: "Omar Eloui | Web Developer",
  htmlAttrs: { lang: "en" },
});
</script>

<template>
  <div>
    <TheNavbar />
    <HeroSection />
    <main>
      <ProjectsSection />
      <CapabilitiesSection />
      <TechnologiesSection />
      <AboutSection />
      <LineBreak />
      <ContactSection />
      <SocialMediaSection />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-bottom: 20px;
}
</style>
