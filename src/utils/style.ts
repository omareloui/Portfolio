export function getStyle(element: HTMLElement, prop: string): number {
  return parseInt(
    window.getComputedStyle(element, null).getPropertyValue(prop)
  );
}

export function getPseudoStyle(element: HTMLElement, prop: string) {
  return parseInt(
    window.getComputedStyle(element, ":before").getPropertyValue(prop)
  );
}
