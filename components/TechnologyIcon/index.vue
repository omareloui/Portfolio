<script setup lang="ts">
const { title, showTitle } = withDefaults(
  defineProps<{ title: string; showTitle?: boolean }>(),
  {
    showTitle: false,
  }
);
</script>

<template>
  <div class="technology">
    <div class="technology__icon" v-bind="{ title }">
      <slot></slot>
    </div>

    <span class="technology__title" v-if="showTitle">
      {{ title }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.technology {
  --icon-size: 50px;

  @include st-mobile {
    --icon-size: 35px;
  }

  background: var(--clr-light);
  padding: 0.5rem;
  border-radius: 5px;

  &__icon {
    @include size(var(--icon-size));

    ::v-deep(svg) {
      @include size(100%);
    }
  }

  &__title {
    display: inline-block;

    text-align: center;
    max-width: var(--icon-size);
    width: 100%;
    margin-top: 5px;

    font-family: var(--fnt-main);
    font-size: var(--fnt-size-small);
    font-weight: var(--fnt-weight-regular);

    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
