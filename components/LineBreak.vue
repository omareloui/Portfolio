<script lang="ts" setup>
const { margin } = withDefaults(
  defineProps<{
    margin?: string;
  }>(),
  {
    margin: "10px",
  }
);
</script>

<template>
  <Container>
    <hr />
  </Container>
</template>

<style lang="scss" scoped>
hr {
  border: none;
  background: var(--clr-primary-gradient);
  height: 3px;
  border-radius: 1px;
  margin: v-bind(margin) 0;
}
</style>
