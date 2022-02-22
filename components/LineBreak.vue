<script lang="ts" setup>
withDefaults(
  defineProps<{
    margin?: string;
    height?: string;
    color?: string;
    borderRadius?: string;
  }>(),
  {
    margin: "10px",
    height: "5px",
    borderRadius: "1px",
    color: "var(--clr-primary-gradient)",
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
  background: v-bind(color);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  margin: v-bind(margin) 0;
}
</style>
