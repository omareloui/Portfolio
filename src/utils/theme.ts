export const THEMES = ["dark", "light", "auto"];

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
