<script lang="ts" setup>
const { margin } = withDefaults(
  defineProps<{
    margin?: string;
    height?: string;
  }>(),
  {
    margin: "10px",
    height: "5px",
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
  height: v-bind(height);
  border-radius: 1px;
  margin: v-bind(margin) 0;
}
</style>
