import { activatecursor, deactivatecursor } from "~~/events";

export function emitCursorActivateEvents(layout: HTMLElement) {
  const activatableElements = [
    ...layout.querySelectorAll("a, button, .clickable"),
  ] as HTMLElement[];

  function onMouseEnter() {
    dispatchEvent(activatecursor);
  }

  function onMouseLeave() {
    dispatchEvent(deactivatecursor);
  }

  activatableElements.forEach(x => {
    x.addEventListener("mouseenter", onMouseEnter);
    x.addEventListener("mouseleave", onMouseLeave);
  });

  function destroy() {
    activatableElements.forEach(x => {
      x.removeEventListener("mouseenter", onMouseEnter);
      x.removeEventListener("mouseleave", onMouseLeave);
    });
  }

  return { destroy };
}
