<script setup lang="ts">
const navLinks = [
  { text: "Portfolio", link: "#projects" },
  { text: "Capabilities", link: "#capabilities" },
  { text: "Contact", link: "#contact" },
];

const emit = defineEmits(["close-nav"]);
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @click="emit('close-nav')"
      >
        <TheLink :to="link.link">{{ link.text }}</TheLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use "~~/assets/styles/mixins" as *;

nav {
  ul {
    list-style: none;
    margin: 0;

    display: flex;
    gap: 20px;
  }
}
</style>
