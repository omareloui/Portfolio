<template>
  <svg viewBox="0 0 32 32">
    <path
      d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M11.5,22.9H7.9V12.2h3.6V22.9z M9.7,10.8L9.7,10.8
			c-1.2,0-2-0.8-2-1.9c0-1,0.8-1.8,2-1.8c1.2,0,2,0.8,2,1.8C11.7,10,10.9,10.8,9.7,10.8z M24.3,22.9h-3.5v-5.7
			c0-1.4-0.5-2.4-1.8-2.4c-1,0-1.6,0.7-1.8,1.3C17,16.3,17,16.7,17,17v6h-3.6c0,0,0-9.7,0-10.7H17v1.5c0.5-0.7,1.3-1.8,3.2-1.8
			c2.3,0,4.1,1.5,4.1,4.8V22.9z"
    />
  </svg>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/mixins" as *;

svg {
  display: block;
  fill: var(--clr-text);
  @include size(clamp(30px, 10vw, 50px));

  transition: fill 500ms ease-in-out;

  &:hover {
    fill: #0a66c2;
  }
}
</style>
