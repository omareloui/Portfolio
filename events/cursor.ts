export const activatecursor = new Event("activatecursor");
export const deactivatecursor = new Event("deactivatecursor");

declare global {
  interface GlobalEventHandlersEventMap {
    activatecursor: Event;
    deactivatecursor: Event;
  }
}
