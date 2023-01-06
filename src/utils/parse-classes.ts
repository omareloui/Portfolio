export type ClassList = string | (string | { [key in string]: boolean })[];

export function parseClasses(classList: ClassList): string {
  if (typeof classList === "string") return classList;

  let classes = "";
  for (const className of classList) {
    if (typeof className === "string") classes += ` ${className}`;
    else {
      const key = Object.keys(className)[0] as string;
      if (className[key]) classes += ` ${className}`;
    }
  }
  return classes.trim();
}
