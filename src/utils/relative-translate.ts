function parseXYProps(value: string): [string, string] {
  let sanatized = value.trim().replace(/\s+/, " ").split(" ");
  if (sanatized.length > 2) throw new Error("Invalid translate value.");
  sanatized = sanatized.map(x => (x === "none" ? "0px" : x));
  if (sanatized.length === 2) return sanatized as [string, string];
  return [sanatized[0], sanatized[0]] as [string, string];
}

export function relativeTranslate(
  elementsToTranslate: {
    element: HTMLElement;
    direction: "with-mouse" | "against-mouse";
    fraction: number;
    transition?: string;
    initialTranslate?: string;
  }[],
  elementToMirrorOnHover: HTMLElement
) {
  const initialPositions: string[] = elementsToTranslate.map(
    el =>
      el.initialTranslate ||
      getComputedStyle(el.element, null).getPropertyValue("translate")
  );

  const initialParsedPositions: [string, string][] = initialPositions.map(
    value => parseXYProps(value) as [string, string]
  );

  function prepareElements() {
    elementsToTranslate.forEach(
      el =>
        (el.element.style.transition =
          el.transition || "1000ms var(--main-timing-function)")
    );
  }

  prepareElements();
  elementToMirrorOnHover.addEventListener("pointermove", onOverHoverElement);
  elementToMirrorOnHover.addEventListener("pointerleave", resetState);

  function onOverHoverElement(e: PointerEvent) {
    const bb = elementToMirrorOnHover.getBoundingClientRect();

    const posFromCenter = {
      x: e.clientX - bb.x - bb.width / 2,
      y: e.clientY - bb.y - bb.height / 2,
    };

    const xPerc = Math.round((posFromCenter.x / bb.width) * 100);
    const yPerc = Math.round((posFromCenter.y / bb.height) * 100);

    elementsToTranslate.forEach((el, i) => {
      const initial = initialParsedPositions[i] as [string, string];
      const mutliplier = el.direction === "with-mouse" ? 1 : -1;
      const finalX = `calc((${initial[0] || "0px"} + ${
        xPerc / el.fraction
      }%) * ${mutliplier})`;
      const finalY = `calc((${initial[1] || "0px"} + ${
        yPerc / el.fraction
      }%) * ${mutliplier})`;

      el.element.style.setProperty("translate", [finalX, finalY].join(" "));
    });
  }

  function resetState() {
    elementsToTranslate.forEach((el, i) =>
      el.element.style.setProperty("translate", initialPositions[i] as string)
    );
  }
}
