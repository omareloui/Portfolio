<script setup lang="ts">
import { useTechnologies } from "~~/composables/useTechnologies";
import { useCamelCaseToTitle } from "~~/composables/useCamelCaseToTitle";

const camelCaseToTitle = useCamelCaseToTitle();
const icons = useTechnologies();
const bubbleEl = ref(null as null | HTMLElement);

const filterOptions = ["all", "frontEnd", "backEnd", "tools", "other"];
type FilterOption = typeof filterOptions[number];
const currentFilter = ref("all" as FilterOption);

let iso;

const filterFunctions = {
  all: (item: HTMLElement) => !!item,
  tools: (item: HTMLElement) =>
    !!getTitleEl(item).dataset.category.match("Tool"),
  frontEnd: (item: HTMLElement) =>
    !!getTitleEl(item).dataset.stack.match(/^(Front-End|Front and Back Ends)$/),
  backEnd: (item: HTMLElement) =>
    !!getTitleEl(item).dataset.stack.match(/^(Back-End|Front and Back Ends)$/),
  other: (item: HTMLElement) => {
    const el = getTitleEl(item);

    return (
      !!el.dataset.stack.match(/^(DevOps|Other)$/) &&
      !el.dataset.category.match("Tool")
    );
  },
};

function getTitleEl(parent: HTMLElement) {
  return parent.querySelector(".technology__title") as HTMLDivElement;
}

async function filterTechnologies(e: PointerEvent) {
  const el = e.target as HTMLElement;
  const filterMode = el.dataset.filter;

  iso.arrange({ filter: filterFunctions[filterMode] });
  currentFilter.value = filterMode;

  await nextTick();

  moveBubble();
}

function moveBubble(currentElement?: HTMLElement) {
  if (!bubbleEl.value) return;
  if (!currentElement)
    currentElement = document.querySelector(
      ".filter-buttons__button--current"
    ) as HTMLElement;
  const currentBoundingBox = currentElement.getBoundingClientRect();

  bubbleEl.value.style.left = `${currentBoundingBox.left - 20}px`;
  bubbleEl.value.style.width = `${currentBoundingBox.width}px`;
  bubbleEl.value.style.height = `${currentBoundingBox.height}px`;
}

function initEvents() {
  addEventListener("resize", onResize);
}

function destroy() {
  removeEventListener("resize", onResize);
}

function onResize() {
  moveBubble();
}

async function init() {
  const { default: Isotope } = await import("isotope-layout");
  iso = new Isotope("ul.technologies", {
    layoutMode: "fitRows",
    getSortData: {
      name: ".technology__title",
      category: ".technology__title[data-category]",
      stack: ".technology__title[data-stack]",
    },
    sortBy: ["original-order"],
  });
  initEvents();
  moveBubble();
}

onMounted(init);
onUnmounted(destroy);
</script>

<template>
  <SectionContainer>
    <SectionHeading>Technologies I use</SectionHeading>
    <SectionSubheading>
      For those who know what they're looking for
    </SectionSubheading>

    <div class="filter-buttons">
      <span class="filter-buttons__current-bubble" ref="bubbleEl"></span>

      <ButtonBase
        v-for="(filterOption, index) in filterOptions"
        :key="index"
        class="filter-buttons__button"
        :class="{
          'filter-buttons__button--current': filterOption === currentFilter,
        }"
        @click="filterTechnologies"
        :data-filter="filterOption"
        >{{ camelCaseToTitle(filterOption) }}</ButtonBase
      >
    </div>

    <ul class="technologies">
      <li v-for="(icon, index) in icons" :key="index">
        <Component :is="`TechnologyIcon${icon}`" />
      </li>
    </ul>
  </SectionContainer>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.technologies {
  list-style: none;
  padding: 1.5rem;
  margin: 15px 0 0;
  background: var(--clr-primary-gradient);
  border-radius: 10px;
}

.filter-buttons {
  position: relative;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  margin: 20px 0;
  padding: 10px 20px;
  border-radius: 9999px;
  background: var(--clr-light);

  &__current-bubble {
    z-index: 1;
    @include center-v;

    background: var(--clr-primary-gradient);
    border-radius: 9999px;

    transition: all 200ms ease-in-out;
  }

  &__button {
    z-index: 2;

    font-family: var(--fnt-main);
    font-weight: var(--fnt-weight-bold);

    background: transparent;
    padding: 20px 30px;
    border: none;
    border-radius: 9999px;

    width: 100%;

    transition: color 200ms ease-in-out;

    &--current {
      color: var(--clr-light);
    }

    @include st-mobile {
      padding: 5px 8px;
      font-size: var(--fnt-size-x-small);
    }
  }
}
</style>
