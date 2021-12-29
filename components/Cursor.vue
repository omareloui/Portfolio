<script setup lang="ts">
import { checkIfTouchScreen, math } from "~~/utils";

const cursor = ref(null as HTMLElement | null);
const location = { x: 0, y: 0 };

const state = {
  ease: 0.0009,
  isActive: false,
  x: {
    prev: location.x,
    curr: location.x,
  },
  y: {
    prev: location.y,
    curr: location.y,
  },
};

onMounted(init);
onUnmounted(destroy);

function init() {
  if (checkIfTouchScreen()) return;
  setLocation();
  initEvents();
}

function setLocation() {
  location.x = innerWidth / 2;
  location.y = innerHeight / 2;
}

/**
 * Cursor related
 */
function updateCursorLocation() {
  const { x: stateX, y: stateY, ease } = state;
  stateX.prev = math.lerp(stateX.prev, stateX.curr, ease);
  stateY.prev = math.lerp(stateY.prev, stateY.curr, ease);
  updateCursorLayout();
}

function updateCursorLayout() {
  const cursorEl = cursor.value;
  if (!cursorEl) return;

  const { x, y } = state;
  const createTran = (value: number) => `calc(${value}px - 50%)`;
  const tran = [x.prev, y.prev].map(createTran).join(", ");

  let scale = 1;
  let opacity = 1;

  if (state.isActive) {
    scale = 3;
    opacity = 0.6;
  }

  cursorEl.style.transform = `translate(${tran})`;

  const svgEl = cursorEl.querySelector("svg")!;
  svgEl.style.transform = `scale(${scale})`;
  svgEl.style.opacity = opacity.toString();
}

function renderCursor() {
  state.x.curr = location.x;
  state.y.curr = location.y;

  state.x.prev = math.lerp(state.x.prev, state.x.curr, state.ease);
  state.y.prev = math.lerp(state.y.prev, state.y.curr, state.ease);

  updateCursorLayout();
  requestAnimationFrame(renderCursor);
}

/**
 * Events
 */
function initEvents() {
  addEventListener("mousemove", onMouseMove);
  addEventListener("resize", onResize);
  addEventListener("activatecursor", onActivateCursor);
  addEventListener("deactivatecursor", onDeactivateCursor);
}

function onActivateCursor() {
  state.isActive = true;
}

function onDeactivateCursor() {
  state.isActive = false;
}

function onMouseMove(e: MouseEvent) {
  const { clientX, clientY } = e;
  location.x = clientX;
  location.y = clientY;

  updateCursorLocation();
  renderCursor();
}

function onResize() {
  updateCursorLocation();
  renderCursor();
}

function removeEvents() {
  removeEventListener("mousemove", onMouseMove);
  removeEventListener("resize", onResize);
  removeEventListener("activatecursor", onActivateCursor);
  removeEventListener("deactivatecursor", onDeactivateCursor);
}

/**
 * Destroy
 */
function destroy() {
  removeEvents();
}
</script>

<template>
  <span class="cursor" ref="cursor">
    <svg viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="var(--clr-text)"></circle>
    </svg>
  </span>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.cursor {
  z-index: 1000000;
  position: fixed;
  top: 0;
  left: 0;

  @include size(15px);

  display: block;
  pointer-events: none;

  svg {
    opacity: 0;
    transition: all 200ms ease-in-out;
  }
}
</style>
