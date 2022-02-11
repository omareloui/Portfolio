<script setup lang="ts">
const activatecursor = new Event("activatecursor");
const deactivatecursor = new Event("deactivatecursor");

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
