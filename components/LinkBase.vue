<script setup lang="ts">
const emit = defineEmits<{
  (e: "click", event: PointerEvent): void;
  (e: "dblclick", event: PointerEvent): void;
}>();
</script>

<template>
  <ClickableElement
    tag="a"
    @click="emit('click', $event)"
    @dblclick="emit('dblclick', $event)"
  >
    <slot></slot>
  </ClickableElement>
</template>
