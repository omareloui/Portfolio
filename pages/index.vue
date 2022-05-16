<script setup lang="ts">
import { useGTag } from "~~/composables/useGTag";

useHead({
  title: "Omar Eloui | Web Developer",
  htmlAttrs: { lang: "en" },
});

onMounted(() => {
  const gtag = useGTag();

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
