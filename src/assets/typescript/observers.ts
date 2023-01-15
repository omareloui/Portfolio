export function init() {
  const observer = new IntersectionObserver(onIntersection, {
    rootMargin: "-200px",
  });

  const navLinks = document.querySelectorAll(":is(header, .nav-menu) ul li");

  const sections = document.querySelectorAll(
    ":is(#projects, #aboutme, #contact, #technologies, #skills)"
  );

  sections.forEach(s => observer.observe(s));
  function onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(e => {
      if (!e.isIntersecting) {
        if (e.target.id === "projects")
          navLinks.forEach(x => x.classList.remove("active"));
        return;
      }

      navLinks.forEach(linkLI => {
        linkLI.classList.remove("active");
        const { href } = linkLI.querySelector("a")!;
        const idFromHref = href.match(/#([^\\]+)$/)![1];
        if (idFromHref === e.target.id) {
          linkLI.classList.add("active");
        }
      });
    });
  }
}
