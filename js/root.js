document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ----------------------------------------
     1) Schutz vor E-Mail-Bots
  ---------------------------------------- */
  document.querySelectorAll(".protected-email").forEach((el) => {
    const user = el.dataset.user;
    const domain = el.dataset.domain;
    if (!user || !domain) return;

    const email = `${user}@${domain}`;

    const a = document.createElement("a");
    a.href = `mailto:${email}`;
    a.textContent = email;

    el.textContent = "";
    el.appendChild(a);
  });

  /* ----------------------------------------
     2) Active Nav Link (aria-current) – robust
  ---------------------------------------- */
  const getCurrentFile = () => {
    // pathname ohne Query/Hash; wenn "/" -> index.html
    const pathname = window.location.pathname || "";
    const file = pathname.split("/").filter(Boolean).pop();
    return file || "index.html";
  };

  const currentFile = getCurrentFile();

  document.querySelectorAll(".site-nav a").forEach((a) => {
    a.removeAttribute("aria-current");

    // href kann "shop.html", "/shop.html" oder absolute URL sein
    let linkFile = a.getAttribute("href") || "";
    try {
      const url = new URL(linkFile, window.location.href);
      const file = (url.pathname || "").split("/").filter(Boolean).pop();
      linkFile = file || "";
    } catch {
      // fallback: hash/query wegschneiden
      linkFile = linkFile.split("#")[0].split("?")[0];
      linkFile = linkFile.split("/").filter(Boolean).pop() || linkFile;
    }

    if (linkFile === currentFile) {
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
      if (e.key !== "Escape") return;
      if (!header.classList.contains("is-menu-open")) return;
      closeMenu();
    });

    // Link-Klick schliesst Menü
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });

    // Falls man von Mobile -> Desktop resizet: Zustand sauber zurücksetzen
    window.addEventListener("resize", () => {
      if (!header.classList.contains("is-menu-open")) return;
      closeMenu();
    });
  }

  /* ----------------------------------------
     4) Ladeanimation verzögert
  ---------------------------------------- */
  window.setTimeout(() => {
    document.body.classList.add("is-ready");
  }, 180);
});
