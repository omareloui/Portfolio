<template>
  <Container tag="section" class="section-container">
    <slot></slot>
  </Container>
</template>

<style lang="scss" scoped>
.section-container {
  --v-space: 30px;

  margin-top: var(--v-space);
  margin-bottom: var(--v-space);
}
</style>
