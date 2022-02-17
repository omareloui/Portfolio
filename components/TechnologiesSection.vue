<script setup lang="ts">
import { useTechnologies } from "~~/composables/useTechnologies";
const icons = useTechnologies();

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

function filterTechnologies(e: PointerEvent) {
  const filterMode = (e.target as HTMLElement).dataset.filter;
  iso.arrange({ filter: filterFunctions[filterMode] });
  currentFilter.value = filterMode;
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
}

onMounted(init);
</script>

<template>
  <SectionContainer>
    <SectionHeading>Technologies I use</SectionHeading>
    <SectionSubheading>
      For those who know what they're looking for
    </SectionSubheading>

    <div class="filter-buttons">
      <span class="filter-buttons__current-bubble"></span>

      <ButtonBase
        v-for="(filterOption, index) in filterOptions"
        :key="index"
        class="filter-buttons__button"
        :class="{
          'filter-buttons__button--current': filterOption === currentFilter,
        }"
        @click="filterTechnologies"
        :data-filter="filterOption"
        >{{ filterOption }}</ButtonBase
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
  --btn-height: 75%;

  position: relative;

  // display: flex;
  // justify-content: space-around;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 20px 0;
  padding: 0 20px;
  border-radius: 9999px;
  background: var(--clr-light-2);

  &__current-bubble {
    z-index: 1;
    @include center-v;
    left: 20px;

    @include size(150px, var(--btn-height));

    background: var(--clr-primary-gradient);
    border-radius: 9999px;
  }

  &__button {
    z-index: 2;

    font-family: var(--fnt-main);
    font-weight: var(--fnt-weight-bold);

    height: var(--btn-height);

    background: transparent;
    padding: 30px;
    border: none;

    transition: color 200ms ease-in-out;

    &--current {
      color: var(--clr-light);
    }
  }
}
</style>
