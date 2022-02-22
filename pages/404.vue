<template>
  <NuxtLayout>
    <div class="not-found">404. Can't be found.</div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use "~~/assets/styles/mixins" as *;

.not-found {
  min-height: 100vh;
  background: var(--clr-gradient-bg);
  color: var(--clr-text-light);
  display: grid;
  place-items: center;
  text-align: center;
}
</style>
