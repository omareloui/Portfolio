<script setup lang="ts">
const emit = defineEmits(["click", "dblclick"]);
</script>

<template>
  <ClickableElement tag="a" @click="emit('click')" @dblclick="emit('dblclick')">
    <slot></slot>
  </ClickableElement>
</template>
