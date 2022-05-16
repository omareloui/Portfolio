type GTagFunction = (
  actionOrConfig: "event" | "config" | "js",
  actionOrValue: string | number | Date,
  options?: {
    debug_mode?: boolean;
    value?: number;
    [K in string]: string | number | Date;
  }
) => void;

declare interface Window {
  dataLayer: unknown[];
}
