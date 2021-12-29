<script setup lang="ts">
import { emitCursorActivateEvents } from "~~/utils";

const layout = ref(null as null | HTMLElement);

let destroy = () => {};

// onMounted(init);
// onUnmounted(destroy);

function init() {
  const { destroy: destroyEvents } = emitCursorActivateEvents(
    layout.value as HTMLElement
  );
  destroy = destroyEvents;
}
</script>

<template>
  <div ref="layout">
    <slot></slot>
    <!-- <Cursor /> -->
  </div>
</template>

<style lang="scss">
// *,
// *::after,
// *::before {
//   cursor: none;
// }
</style>
