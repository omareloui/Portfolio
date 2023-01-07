export function camelCaseToTitle(camelCase: string) {
  return camelCase
    .replace(/(^\w|[A-Z0-9])/g, match => ` ${match.toUpperCase()}`)
    .trim();
}
