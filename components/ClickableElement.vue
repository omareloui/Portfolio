<script setup lang="ts">
const activatecursor = new Event("activatecursor");
const deactivatecursor = new Event("deactivatecursor");

const { tag } = defineProps<{ tag: string }>();

const emit = defineEmits<{
  (e: "click", event: PointerEvent): void;
  (e: "dblclick", event: PointerEvent): void;
}>();

function onMouseEnter() {
  dispatchEvent(activatecursor);
}

function onMouseLeave() {
  dispatchEvent(deactivatecursor);
}
</script>

<template>
  <component
    :is="tag"
    @click="emit('click', $event)"
    @dblclick="emit('dblclick', $event)"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    :tabindex="tag.match(/^(a|button)$/) ? undefined : '0'"
    ><slot></slot
  ></component>
</template>
