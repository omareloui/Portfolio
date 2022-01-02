<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  --container-width: 700px;
  --container-padding: 10px;

  max-width: var(--container-width);
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: calc(var(--container-padding) * 2 + var(--container-width))) {
    max-width: 100%;
  }
}
</style>
