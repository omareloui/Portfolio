<script setup lang="ts">
const emit = defineEmits<{
  (e: "click", event: PointerEvent): void;
  (e: "dblclick", event: PointerEvent): void;
}>();
</script>

<template>
  <ClickableElement
    tag="button"
    @click="emit('click', $event)"
    @dblclick="emit('dblclick', $event)"
    v-bind="$attrs"
  >
    <slot></slot>
  </ClickableElement>
</template>
