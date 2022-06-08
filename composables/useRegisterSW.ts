export function useRegisterSW() {
  return () => {
    function onLoad() {
      if (!("serviceWorker" in navigator)) return;
      navigator.serviceWorker.register("/sw.js");
    }

    addEventListener("load", onLoad);
    return { destroy: () => removeEventListener("load", onLoad) };
  };
}
