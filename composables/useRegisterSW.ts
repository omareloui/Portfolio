export function useRegisterSW() {
  return () => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js");
  };
}
