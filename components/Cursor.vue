<script setup lang="ts">
import { useMath } from "~~/composables/useMath";
import { useCheckIfTouchScreen } from "~~/composables/useCheckIfTouchScreen";

const math = useMath();

const el = ref(null as null | HTMLElement);

let isLoaded = false;
let isActive = false;

const location = { x: 0, y: 0 };

const cursorState = {
  ease: 0.1,
  x: {
    prev: location.x,
    curr: location.x,
  },
  y: {
    prev: location.y,
    curr: location.y,
  },
};

function init() {
  const checkIfTouchScreen = useCheckIfTouchScreen();
  if (checkIfTouchScreen()) return;

  setCursorInitialState();
  initEvents();
}

function setCursorInitialState() {
  location.x = innerWidth / 2;
  location.y = innerHeight / 2;

  cursorState.x.prev = location.x;
  cursorState.x.curr = location.x;

  cursorState.y.prev = location.y;
  cursorState.y.curr = location.y;
}

function updateCursor() {
  const { x: stateX, y: stateY, ease } = cursorState;
  stateX.prev = math.lerp(stateX.prev, stateX.curr, ease);
  stateY.prev = math.lerp(stateY.prev, stateY.curr, ease);
  updateCursorLayout();
}

function updateCursorLayout() {
  if (!el) throw new Error("Can't find the element");

  const { x, y } = cursorState;
  const createTran = (value: number) => `calc(${value}px - 50%)`;
  const tran = [x.prev, y.prev].map(createTran).join(", ");

  let scale = 1;
  let opacity = 1;

  if (isActive) {
    scale = 3;
    opacity = 0.8;
  }

  el.value!.style.transform = `translate(${tran})`;
  const svgEl = el.value!.querySelector("svg")!;
  svgEl.style.transform = `scale(${scale})`;
  svgEl.style.opacity = opacity.toString();
}

function renderCursor() {
  const { x: stateX, y: stateY, ease } = cursorState;

  stateX.curr = location.x;
  stateY.curr = location.y;

  stateX.prev = math.lerp(stateX.prev, stateX.curr, ease);
  stateY.prev = math.lerp(stateY.prev, stateY.curr, ease);

  updateCursorLayout();
  requestAnimationFrame(renderCursor);
}

/**
 * Events
 */
function onActivateCursor() {
  isActive = true;
}

function onDeactivateCursor() {
  isActive = false;
}

function onMouseMove(e: MouseEvent) {
  const { clientX, clientY } = e;
  location.x = clientX;
  location.y = clientY;

  updateCursor();

  if (!isLoaded) {
    el.value!.querySelector("svg")!.style.transform = "scale(1)";
    renderCursor();
    isLoaded = true;
  }
}

function onResize() {
  updateCursor();
}

function initEvents() {
  addEventListener("mousemove", onMouseMove);
  addEventListener("resize", onResize);
  addEventListener("activatecursor", onActivateCursor);
  addEventListener("deactivatecursor", onDeactivateCursor);
}

function removeEvents() {
  removeEventListener("mousemove", onMouseMove);
  removeEventListener("resize", onResize);
  removeEventListener("activatecursor", onActivateCursor);
  removeEventListener("deactivatecursor", onDeactivateCursor);
}

function destroy() {
  removeEvents();
}

onMounted(init);
onBeforeUnmount(destroy);
</script>

<template>
  <span class="cursor" ref="el">
    <svg viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="var(--clr-cursor)"></circle>
    </svg>
  </span>
</template>

<style>
* {
  cursor: none;
}
</style>

<style scoped lang="scss">
@use "~~/assets/styles/mixins" as *;

.cursor {
  z-index: 1000000;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  @include size(20px);

  svg {
    transition: all 200ms ease-in-out;
    transform: scale(0);
  }
}
</style>
