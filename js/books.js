// js/books.js

// ==========================================================
// 1) Zentrale Datenquelle
// ==========================================================
const BOOKS = [
  {
    id: "band1",
    title: "Gedichte",
    meta: "Gedichtband · 2020–2023",
    descriptionHome:
      "In ihrem neuesten Gedichtband lädt Esther Hohmeister mit einer Mischung aus Witz, feinem Wortspiel und leiser Ironie zu einer heiteren Reise durch den Alltag ein. Die Gedichte entstehen aus Beobachtungen, kleinen Begebenheiten und überraschenden Momenten. Begleitet werden die Texte von ebenso lebhaften Illustrationen der Grafikerin Rebekka Good.",
    descriptionShop:
      "Dieser Gedichtband vereint Texte aus den Jahren 2020 bis 2023. Mit Witz, Wortspiel und feiner Ironie erzählt Esther Hohmeister von Alltagsmomenten, Begegnungen und leisen Überraschungen. Die Gedichte werden durch lebhafte Illustrationen von Rebekka Good ergänzt und bilden zusammen ein leichtfüssiges, stimmiges Gesamtwerk.",
    price: "CHF 24.–",
    cover: "images/Gedichte2020-2023.jpg",
    alt: "Cover des mintfarbigen Gedichtbandes aus den Jahren 2020–2023",
  },
  {
    id: "band2",
    title: "Gedichte",
    meta: "Gedichtband · 2016–2019",
    descriptionHome:
      "In diesem Gedichtband versammelt Esther Hohmeister 53 Beobachtungen aus vier Jahren Bündner Woche. Die Texte reichen vom Calanda-Wolf bis zur Geburtstagsrunde, von Grossmüttern und Vergessenem bis zu kleinen Alltagswundern. Heiter, nachdenklich und mit liebevollem Blick erzählen die Gedichte vom Leben in all seinen Facetten.",
    descriptionShop:
      "53 Gedichte aus vier Jahren Bündner Woche: Geschichten von Klassenzusammenkünften, Waschküchen, Calanda-Wölfen und unscheinbaren Alltagsmomenten. Mit feinem Humor und genauer Beobachtung beschreibt Esther Hohmeister das Leben zwischen Vertrautem und Überraschendem – berührend, heiter und nah am Alltag.",
    price: "CHF 19.–",
    cover: "images/Gedichte2.jpg",
    alt: "Cover des Gedichtbandes Gedichte 2016–2019 mit grauem Hintergrund",
  },
  {
    id: "band3",
    title: "Gedichte",
    meta: "Gedichtband · 2012–2015",
    descriptionHome:
      "Ein Gedichtband voller Jahreszeiten, Alltagsmomente und kleiner Wunder. Die Texte reichen von Kinderaugen bis Crocs-Schuhen, von Dankbarkeit bis zum ersten Schnee. Vier Jahre Bündner Woche verdichten sich zu heiteren, warmen und nachdenklichen Szenen, die den Alltag mit feinem Gespür einfangen.",
    descriptionShop:
      "53 Gedichte aus vier Jahren Bündner Woche – vom Schlankheitswahn bis zur Mutterliebe, von Aromat und Crocs-Schuhen bis zu Quartierfesten und leisen Wintertagen. Esther Hohmeister beschreibt Alltagsbeobachtungen zwischen Humor, Wärme und Nachdenklichkeit und verleiht ihnen poetische Tiefe.",
    price: "CHF 19.–",
    cover: "images/Gedichte1.jpg",
    alt: "Cover des Gedichtbandes Gedichte 2012–2015 mit hellem Hintergrund",
  },
  {
    id: "band4",
    title: "Fore! Golfgedichte 2",
    meta: "Gedichtband · 2013",
    descriptionHome:
      "Ein heiterer Blick auf die Welt der Golferinnen und Golfer. Die Gedichte erzählen von Ausreden und Beichten, von verliebten Golfbällen und morgendlichen Ritualen. Humorvoll, augenzwinkernd und mit liebevoller Ironie nimmt dieser Band den Golfsport und seine Eigenheiten ins Visier.",
    descriptionShop:
      "Ein Band voller augenzwinkernder Golfgedichte: über Sucht und Handicap, Ausreden, Beichten und kleine Dramen zwischen Tee und Loch 19. Mit pointiertem Humor und genauer Beobachtung beschreibt Esther Hohmeister die Eigenheiten des Golfsports – ideal für alle, die ihn lieben oder schmunzelnd verstehen wollen.",
    price: "CHF 14.–",
    cover: "images/ForeGolfgedichte2.jpg",
    alt: "Cover des Gedichtbandes Fore! Golfgedichte 2 mit zwei gemalten Golfbällen",
  },
  {
    id: "band5",
    title: "Fore! Golfgedichte",
    meta: "Gedichtband · 2011",
    descriptionHome:
      "Der erste Gedichtband, mit dem alles begann. Die Gedichte erzählen von Begegnungen auf dem Golfplatz, kleinen Dramen, meckernden Weiberrunden und verständnisvollen Männern. Geschichten zwischen Entscheidung, Fairway und Pro-Shop – humorvoll, pointiert und voller Wiedererkennen.",
    descriptionShop:
      "Der Band, mit dem Esther Hohmeister ihr öffentliches Dichten begann. Geschichten von glücklichen Nichtgolfern, Fairway-Kriegen, Seniorenturnieren und herbstlichen Frauentagen. Mit Humor und feinem Blick erzählt dieser Gedichtband von kleinen Momenten im Pro-Shop und auf dem Golfplatz.",
    price: "CHF 14.–",
    cover: "images/ForeGolfgedichte1.jpg",
    alt: "Cover des Gedichtbandes Fore! Golfgedichte mit gemaltem Golfball",
  },
];

const ORDER_EMAIL = "esther@hohmeister.ch";

function formatDateCH(date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  return `${d}.${m}.${y}`;
}

// ==========================================================
// 2) Lightbox (mit ESC + Fokus-Restore)
// ==========================================================
let lightboxEl = null;
let lightboxImg = null;
let lightboxCloseBtn = null;
let lastActiveEl = null;

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove("image-lightbox--visible");

  if (lastActiveEl && typeof lastActiveEl.focus === "function") {
    lastActiveEl.focus();
  }
}

function ensureLightbox() {
  if (lightboxEl) return;

  const el = document.createElement("div");
  el.className = "image-lightbox";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-label", "Bildvorschau");

  const img = document.createElement("img");
  img.className = "image-lightbox__img";
  el.appendChild(img);

  const closeBtn = document.createElement("button");
  closeBtn.className = "image-lightbox__close-btn";
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Schliessen");
  closeBtn.textContent = "×";

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  el.addEventListener("click", () => closeLightbox());

  el.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  el.appendChild(closeBtn);
  document.body.appendChild(el);

  lightboxEl = el;
  lightboxImg = img;
  lightboxCloseBtn = closeBtn;
}

function openLightbox(src, alt) {
  ensureLightbox();

  lastActiveEl = document.activeElement;

  lightboxImg.src = src;
  lightboxImg.alt = alt || "";

  lightboxEl.classList.add("image-lightbox--visible");

  // Fokus auf Close-Button (Keyboard)
  requestAnimationFrame(() => {
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  });
}

// ==========================================================
// 3) Book-Card erstellen (Home & Shop)
// ==========================================================
function createBookCard(book, context) {
  const article = document.createElement("article");
  article.className = "book-card";
  article.dataset.bookId = book.id;

  // Cover
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "book-card__image-wrapper";

  const img = document.createElement("img");
  img.src = book.cover;
  img.alt = book.alt;
  img.className = "book-card__image";
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => openLightbox(book.cover, book.alt));

  imageWrapper.appendChild(img);

  // Title + Meta
  const title = document.createElement("h3");
  title.className = "book-card__title";
  title.innerHTML = `
    ${book.title}<br>
    <span class="book-card__meta">${book.meta}</span>
  `;

  // Description
  const desc = document.createElement("p");
  desc.className = "book-card__description";
  desc.textContent = context === "home" ? book.descriptionHome : book.descriptionShop;

  // Toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "book-card__toggle";
  toggleBtn.type = "button";
  toggleBtn.textContent = "Mehr lesen";

  toggleBtn.addEventListener("click", () => {
    const container = article.closest(".book-list") || article.parentElement;
    const collapsedHeight = 5.4 * parseFloat(getComputedStyle(desc).fontSize);

    const collapseCard = (cardEl) => {
      const d = cardEl.querySelector(".book-card__description");
      const t = cardEl.querySelector(".book-card__toggle");
      if (!d || !t) return;
      if (!cardEl.classList.contains("is-expanded")) return;

      const startH = d.getBoundingClientRect().height;
      d.style.height = `${startH}px`;
      d.offsetHeight; // reflow
      d.style.height = `${collapsedHeight}px`;

      cardEl.classList.remove("is-expanded");
      t.textContent = "Mehr lesen";
    };

    const expandCard = (cardEl) => {
      const d = cardEl.querySelector(".book-card__description");
      const t = cardEl.querySelector(".book-card__toggle");
      if (!d || !t) return;

      const startH = d.getBoundingClientRect().height;
      cardEl.classList.add("is-expanded");

      d.style.height = "auto";
      const targetH = d.scrollHeight;

      d.style.height = `${startH}px`;
      d.offsetHeight; // reflow
      d.style.height = `${targetH}px`;

      t.textContent = "Weniger lesen";

      const onEnd = () => {
        d.removeEventListener("transitionend", onEnd);
        if (cardEl.classList.contains("is-expanded")) d.style.height = "auto";
      };
      d.addEventListener("transitionend", onEnd);
    };

    const isOpening = !article.classList.contains("is-expanded");

    // Akkordeon: wenn öffnen -> andere schliessen
    if (isOpening && container) {
      container.querySelectorAll(".book-card.is-expanded").forEach((openCard) => {
        if (openCard !== article) collapseCard(openCard);
      });
      expandCard(article);
    } else {
      collapseCard(article);
    }
  });

  // Actions
  const actions = document.createElement("div");
  actions.className = "book-card__actions";

  let actionElement;
  if (context === "shop") {
    const today = new Date();
    const dateStr = formatDateCH(today);
    const subject = `Bestellung: ${book.title} (${book.meta}), ${dateStr}`;

    actionElement = document.createElement("a");
    actionElement.className = "button button-primary book-card__button";
    actionElement.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}`;
    actionElement.textContent = "Bestellen";
  } else {
    actionElement = document.createElement("a");
    actionElement.className = "button button-secondary book-card__button";
    actionElement.textContent = "Zum Shop";
    actionElement.href = `shop.html#${book.id}`;
  }
  actions.appendChild(actionElement);

  if (context === "shop") {
    const priceWrap = document.createElement("div");
    priceWrap.className = "book-card__price-wrap";

    const price = document.createElement("span");
    price.className = "book-card__price";
    price.textContent = book.price;

    const shipping = document.createElement("span");
    shipping.className = "book-card__shipping-note";
    shipping.textContent = "exkl. Versand";

    priceWrap.appendChild(price);
    priceWrap.appendChild(shipping);
    actions.appendChild(priceWrap);
  }

  // Assemble
  article.appendChild(imageWrapper);
  article.appendChild(title);
  article.appendChild(desc);
  article.appendChild(toggleBtn);
  article.appendChild(actions);

  return article;
}

// ==========================================================
// 4) Placeholder (Shop) – valid HTML
// ==========================================================
function createPlaceholderCard() {
  const article = document.createElement("article");
  article.className = "book-card book-card--placeholder";

  const inner = document.createElement("div");
  inner.className = "book-card__placeholder-inner";

  const title = document.createElement("h2");
  title.className = "placeholder-title";
  title.innerHTML = `Stöbern,<br>finden,<br>verbinden!`;

  const sub = document.createElement("p");
  sub.className = "placeholder-subtitle";
  sub.textContent = "Entdecken Sie die Werke von Esther Hohmeister – für sich oder für andere.";

  inner.appendChild(title);
  inner.appendChild(sub);

  article.appendChild(inner);
  return article;
}

// ==========================================================
// 5) Render
// ==========================================================
function renderBooks(targetId, context) {
  const container = document.getElementById(targetId);
  if (!container) return;

  if (context === "shop") {
    const placeholder = createPlaceholderCard();
    placeholder.style.setProperty("--i", 0);
    container.appendChild(placeholder);

    BOOKS.forEach((book, index) => {
      const card = createBookCard(book, context);
      card.style.setProperty("--i", index + 1);
      container.appendChild(card);
    });
    return;
  }

  if (context === "home") {
    const sets = 3;
    for (let s = 0; s < sets; s++) {
      BOOKS.forEach((book) => {
        const card = createBookCard(book, context);
        card.dataset.bookId = book.id;
        card.dataset.set = String(s);
        container.appendChild(card);
      });
    }
  }
}

// ==========================================================
// 6) Shop: Hash -> sanft scrollen + subtil highlight
// ==========================================================
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getHeaderOffset() {
  const header = document.querySelector(".site-header");
  return header ? header.offsetHeight || 0 : 0;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY, duration = 1000) {
  if (prefersReducedMotion()) {
    window.scrollTo(0, targetY);
    return Promise.resolve();
  }

  const startY = window.scrollY;
  const delta = targetY - startY;
  const start = performance.now();

  return new Promise((resolve) => {
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeInOutCubic(t);
      window.scrollTo(0, startY + delta * eased);
      if (t < 1) requestAnimationFrame(tick);
      else resolve();
    }
    requestAnimationFrame(tick);
  });
}

async function scrollToCardSoft(cardEl, extraOffset = 18) {
  const headerOffset = getHeaderOffset() + extraOffset;
  const target = cardEl.getBoundingClientRect().top + window.scrollY - headerOffset;

  const current = window.scrollY;
  const distance = Math.abs(target - current);

  if (distance > 700) {
    const preTarget = Math.max(0, current - 220);
    await smoothScrollTo(preTarget, 260);
  }

  const duration = Math.min(1400, Math.max(800, distance * 0.75));
  await smoothScrollTo(target, duration);
}

function highlightCard(cardEl) {
  document.querySelectorAll(".book-card.is-highlight").forEach((el) => {
    el.classList.remove("is-highlight");
  });

  cardEl.classList.remove("is-highlight");
  void cardEl.offsetWidth;

  cardEl.classList.add("is-highlight");
  window.setTimeout(() => cardEl.classList.remove("is-highlight"), 3200);
}

async function handleShopHashJump() {
  const grid = document.getElementById("shop-book-grid");
  if (!grid) return;

  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;

  const id = decodeURIComponent(hash.slice(1));
  const card = grid.querySelector(`.book-card[data-book-id="${CSS.escape(id)}"]`);
  if (!card) return;

  await scrollToCardSoft(card, 18);
  highlightCard(card);
}

// ==========================================================
// 7) Init
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  ensureLightbox();

  renderBooks("home-book-carousel", "home");
  renderBooks("shop-book-grid", "shop");

  handleShopHashJump();
  window.addEventListener("hashchange", handleShopHashJump);

  // Home Carousel Controls (lokal zum Wrapper, damit es auf anderen Seiten nicht kollidiert)
  const carousel = document.getElementById("home-book-carousel");
  if (!carousel) return;

  const wrapper = carousel.closest(".carousel-wrapper") || document;
  const left = wrapper.querySelector(".arrow-left");
  const right = wrapper.querySelector(".arrow-right");

  if (!left || !right) return;

  const getScrollAmount = () => {
    const firstCard = carousel.querySelector(".book-card");
    if (!firstCard) return 0;

    const cardW = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(carousel).gap) || 0;

    return cardW + gap;
  };

  // Breite von einem Set (BOOKS.length)
  const setWidth = BOOKS.length * getScrollAmount();

  // Start in der Mitte (Set 2 von 3)
  carousel.style.scrollBehavior = "auto";
  carousel.scrollLeft = setWidth;
  requestAnimationFrame(() => {
    carousel.style.scrollBehavior = "smooth";
  });

  let isAdjusting = false;
  const keepInMiddle = () => {
    if (isAdjusting) return;

    const x = carousel.scrollLeft;

    if (x < setWidth * 0.35) {
      isAdjusting = true;
      carousel.style.scrollBehavior = "auto";
      carousel.scrollLeft = x + setWidth;
      requestAnimationFrame(() => {
        carousel.style.scrollBehavior = "smooth";
        isAdjusting = false;
      });
    }

    if (x > setWidth * 1.65) {
      isAdjusting = true;
      carousel.style.scrollBehavior = "auto";
      carousel.scrollLeft = x - setWidth;
      requestAnimationFrame(() => {
        carousel.style.scrollBehavior = "smooth";
        isAdjusting = false;
      });
    }
  };

  carousel.addEventListener("scroll", keepInMiddle, { passive: true });

  left.addEventListener("click", () => {
    carousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    carousel.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });
});
