<script setup lang="ts">
import { activatecursor, deactivatecursor } from "~~/assets/events";

const { tag } = defineProps<{ tag: string }>();

const emit = defineEmits(["click", "dblclick"]);

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
    @click="emit('click')"
    @dblclick="emit('dblclick')"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    tabindex="0"
    ><slot></slot
  ></component>
</template>
