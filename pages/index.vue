<script setup lang="ts">
useMeta({
  title: "Omar Eloui | Web Developer",
  htmlAttrs: { lang: "en" },
});

onMounted(() => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer!.push(...args);
  gtag("js", new Date());
  gtag("config", "G-MD040L0DB2");
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
