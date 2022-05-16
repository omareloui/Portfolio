export function useGTag(): GTagFunction {
  window.dataLayer = window.dataLayer || [];
  return (...args) => window.dataLayer!.push(...args);
}
