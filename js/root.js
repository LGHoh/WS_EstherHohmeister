document.addEventListener("DOMContentLoaded", () => {

  /* ----------------------------------------
     1) Schutz vor E-Mail-Bots
  ---------------------------------------- */
  document.querySelectorAll(".protected-email").forEach(el => {
    const user = el.dataset.user;
    const domain = el.dataset.domain;
    if (!user || !domain) return;

    const email = `${user}@${domain}`;
    el.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  });


  /* ----------------------------------------
     2) Active Nav Link (aria-current)
  ---------------------------------------- */
  const path = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach(a => {
    a.removeAttribute("aria-current");
    if (a.getAttribute("href") === path) {
      a.setAttribute("aria-current", "page");
    }
  });


  /* ----------------------------------------
     3) Mobile Navigation (Hamburger)
  ---------------------------------------- */
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (header && toggle && nav) {

    const closeMenu = () => {
      header.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menü öffnen");
    };

    const openMenu = () => {
      header.classList.add("is-menu-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Menü schließen");
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      header.classList.contains("is-menu-open") ? closeMenu() : openMenu();
    });

    // Klick ausserhalb schliesst Menü
    document.addEventListener("click", (e) => {
      if (!header.classList.contains("is-menu-open")) return;
      if (!header.contains(e.target)) closeMenu();
    });

    // ESC schliesst Menü
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Link-Klick schliesst Menü
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });
  }

  /* ----------------------------------------
     4) Ladeanimation verzögert
  ---------------------------------------- */
  setTimeout(() => {
    document.body.classList.add("is-ready");
  }, 180); // fühlt sich ruhig & hochwertig an
});
