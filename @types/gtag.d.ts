type GTagFunction = (event: string, ...options: unknown[]) => void;

declare const gtag: GTagFunction;

declare interface Window {
  dataLayer: unknown[];
  gtag: GTagFunction;
}
