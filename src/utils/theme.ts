import { ThemeToggleEvent } from "@assets/typescript/events";

export const THEMES = ["dark", "light", "auto"] as const;

export type ThemeState = typeof THEMES[number];

const LOCAL_STORAGE_THEME_NAME = "theme";

function storeInLocalStorage(state: ThemeState) {
  localStorage.setItem(LOCAL_STORAGE_THEME_NAME, state);
}

function getSystemTheme(): Exclude<ThemeState, "auto"> {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "dark" : "light";
}

export function setTheme(theme: ThemeState, shouldStoreInLocalStorage = true) {
  const rootEl = document.querySelector("html") as HTMLHtmlElement;

  if (theme === "auto") setTheme(getSystemTheme(), false);
  else if (theme === "light") rootEl.setAttribute("theme", "");
  else rootEl.setAttribute("theme", theme);

  if (shouldStoreInLocalStorage) storeInLocalStorage(theme);
}

export function getFromLocalStorage(): ThemeState | null {
  return localStorage.getItem(LOCAL_STORAGE_THEME_NAME) as ThemeState | null;
}

export function getFromSystemColorScheme(): Exclude<ThemeState, "auto"> {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDark) return "dark";
  return "light";
}

export function toggleTheme(): void {
  const rootEl = document.querySelector("html") as HTMLHtmlElement;
  if (rootEl.getAttribute("theme")) setTheme("light");
  else setTheme("dark");
}

export function checkIfShouldLoadSystemTheme(
  localItem?: ThemeState | null
): boolean {
  const _localItem = localItem || getFromLocalStorage();
  return !_localItem || (_localItem && _localItem === "auto");
}

export function loadFromLocalStorage() {
  return setTheme(getFromLocalStorage() || "auto");
}

export function loadFromSystemTheme() {
  const localItem = getFromLocalStorage();
  if (!checkIfShouldLoadSystemTheme(localItem)) return;

  setTheme(getFromSystemColorScheme(), false);
}

export function listenForSystemColorSchemeChange() {
  if (checkIfShouldLoadSystemTheme())
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e => {
        setTheme(e.matches ? "dark" : "light");
      });
}

export function init() {
  loadFromLocalStorage();
  listenForSystemColorSchemeChange();
}

////////////////////////////////////////////////////////////////////////////////

/// Event listeners {{{
export function loadInitialState(element: HTMLElement) {
  const checkbox = element.querySelector("input") as HTMLInputElement;

  // Set the current state for the switch
  const selectedTheme = getFromLocalStorage();
  if (selectedTheme === "dark") checkbox.checked = true;
  else if (selectedTheme === "light") checkbox.checked = false;
  else checkbox.indeterminate = true;

  checkbox.addEventListener("change", inputHandlerFactory(checkbox));
}

export function inputHandlerFactory(checkbox: HTMLInputElement) {
  // Add event listeners for checkboxes
  let wasIndeterminate = checkbox.indeterminate;
  function isSwitchInput(el: HTMLElement): el is HTMLInputElement {
    if (el.tagName !== "INPUT") return false;
    if (el.getAttribute("role") !== "switch") return false;
    if (!el.classList.contains("switch__input")) return false;
    return true;
  }

  return function handleInputChange(e: Event) {
    const target = e.target as HTMLLabelElement | HTMLInputElement;

    const input: HTMLInputElement = isSwitchInput(target)
      ? target
      : (target.querySelector("input.switch__input") as HTMLInputElement);

    if (wasIndeterminate && getFromSystemColorScheme() === "dark") {
      input.checked = false;
      wasIndeterminate = false;
    }

    document.dispatchEvent(ThemeToggleEvent);
    setTheme(input.checked ? "dark" : "light");
  };
}
/// }}}

/// On theme change {{{
export function onThemeToggle() {
  const oldState = getCurrentState();
  const newState = oldState === "dark" ? "light" : "dark";
  updateSwitchesUI(newState);
  updateFavicon(newState);
}

export function getCurrentState(): ThemeState {
  const htmlEl = document.querySelector("html") as HTMLHtmlElement;
  return htmlEl.getAttribute("theme") === "dark" ? "dark" : "light";
}

function updateSwitchesUI(state: ThemeState) {
  document
    .querySelectorAll(".switch")
    .forEach(
      s =>
        ((s.querySelector("input") as HTMLInputElement).checked =
          state === "dark" ? true : false)
    );
}

export function updateFavicon(state: ThemeState) {
  const favicon = document.querySelector("link[rel='icon']");
  const linkEl = document.createElement("link");
  const { head } = document;
  linkEl.setAttribute("rel", "icon");
  linkEl.setAttribute("type", "image/svg+xml");
  if (state === "light")
    linkEl.setAttribute("href", "/icons/favicon-light.svg");
  else linkEl.setAttribute("href", "/icons/favicon-dark.svg");
  head.removeChild(favicon as HTMLElement);
  head.appendChild(linkEl);
}
/// }}}
