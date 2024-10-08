import { HideScrollTopEvent, ShowScrollTopEvent } from "./events";

export function init() {
  const observer = new IntersectionObserver(onIntersection, {});

  const navLinks = document.querySelectorAll(":is(header, .nav-menu) ul li");

  const sections = document.querySelectorAll("section");

  sections.forEach(s => observer.observe(s));
  function onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(e => {
      // Scroll top
      if (e.target.classList.contains("hero")) {
        if (!e.isIntersecting) document.dispatchEvent(ShowScrollTopEvent);
        else document.dispatchEvent(HideScrollTopEvent);
      }

      // Nav active highlight
      navLinks.forEach(linkLi => {
        const { href } = linkLi.querySelector("a")!;
        const idFromHref = href.match(/#([^\\]+)$/)![1];
        if (idFromHref === e.target.id) {
          if (e.isIntersecting) linkLi.classList.add("active");
          else linkLi.classList.remove("active");
        }
      });
    });
  }
}
