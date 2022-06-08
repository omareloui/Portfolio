<script setup lang="ts">
useHead({
  title: "Omar Eloui | Web Developer",
  htmlAttrs: { lang: "en" },
});

function setGTag() {
  const route = useRoute();
  const visitor = route.query.v as string | undefined;
  const source = route.query.s as string | undefined;

  if (!visitor && !source) return;

  const { $gtag } = useNuxtApp();

  if (visitor) $gtag("event", "recognized_visitor", { value: 1, visitor });
  if (source) $gtag("event", "recognized_src", { value: 1, source });
}

function init() {
  setGTag();
}

onMounted(init);
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
