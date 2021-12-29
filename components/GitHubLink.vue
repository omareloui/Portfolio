<template>
  <div class="github">
    <a href="https://github.com/omareloui" target="_blank">
      <GitHubIcon />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.github {
  position: absolute;
  bottom: 0;
  right: 0;

  a {
    display: block;
  }
}
</style>
