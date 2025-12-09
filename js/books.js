// js/books.js

// 1) Zentrale Datenquelle: alle Gedichtbände an einem Ort
const BOOKS = [
  {
    id: "band1",
    title: "Gedichte",
    meta: "Gedichtband · 2020-2023",
    descriptionHome:
      "Humorvolle Einblicke in das Leben auf dem Golfplatz und darüber hinaus.",
    descriptionShop:
      "In ihrem neuesten Gedichband lädt Esther Hohmeister mit einer Mischung aus Witz, Wortspiel und feiner Ironie zu einer heiteren Reise durch den Alltag ein.",
    price: "CHF 24.–",
    cover: "images/Gedichte2020-2023.jpg",
    alt: "Cover des mintfarbigen Gedichtbandes aus dem Jahr 2020-2023"
  },
  {
    id: "band2",
    title: "Gedichte",
    meta: "Gedichtband · 2016-2019",
    descriptionHome:
      "In diesem Gedichtband versammelt Esther Hohmeister 53 Beobachtungen aus vier Jahren Bünder Woche – vom Calanda-Wolf bis zur Geburtstagsrunde, von Grossmüttern und Vergessenem bis zu einem Weihnachtsgeschenk. Heiter, nachdenklich und voller kleiner Alltagswunder.",
    descriptionShop:
      "53 Gedichte aus vier Jahren Bünder Woche – Geschichten von Klassenzusammenkünften, Waschküchen, Calanda-Wölfen und kleinen Alltagsmomenten. Heiter, berührend und mit liebevoller Beobachtung erzählt.",
    price: "CHF 19.–",
    cover: "images/Gedichte2.jpg",
    alt: "Cover des Gedichtbandes Gedichte 2016-2019. Das Wort GEDICHTE auf einem grauen Hintergrund"
  },
  {
    id: "band3",
    title: "Gedichte",
    meta: "Gedichtband · 2012-2015",
    descriptionHome:
      "Ein Gedichtband voller Jahreszeiten, Alltagsmomente und kleiner Wunder – von Kinderaugen bis Crocs-Schuhen, von Dankbarkeit bis zum ersten Schnee. Vier Jahre Bündner Woche, verdichtet zu heiteren, warmen und nachdenklichen Szenen.",
    descriptionShop:
      "53 Gedichte aus vier Jahren Bündner Woche – vom Schlankheitswahn bis zur Mutterliebe, von Aromat und Crocs-Schuhen bis zu Quartierfesten, Stressmomenten und leisen Wintertagen. Ein Band voller Alltagsbeobachtungen zwischen Humor, Wärme und Nachdenklichkeit.",
    price: "CHF 19.–",
    cover: "images/Gedichte1.jpg",
    alt: "Cover des Gedichtbandes Gedichte 2012-2015. Das Wort GEDICHTE auf einem weissen Hintergrund"
  },
  {
    id: "band4",
    title: "Fore! Golfgedichte 2",
    meta: "Gedichtband · 2013",
    descriptionHome:
      "Ein heiterer Blick auf die Welt der Golferinnen und Golfer – von Ausreden und Beichten bis zu verliebten Golfbällen und morgendlichen Gebeten. Humorvoll, augenzwinkernd und mit liebevoller Ironie erzählt.",
    descriptionShop:
      "Ein Band voller augenzwinkernder Golfgedichte – über Sucht und Handicap, Ausreden und seltsame Leut’, Beichten, Locker-Rituale und kleine Dramen zwischen Tee und Loch 19. Humorvoll, pointiert und ideal für alle, die den Golfsport lieben oder verstehen wollen.",
    price: "CHF 14.–",
    cover: "images/ForeGolfgedichte2.jpg",
    alt: "Cover des Gedichtbandes Fore 2! Zwei gemalte Golfbälle liegen auf dem Green"
  },
  {
    id: "band5",
    title: "Fore! Golfgedichte",
    meta: "Gedichtband · 2011",
    descriptionHome:
      "Der erste Gedichtband, mit dem alles begann – voller Begegnungen auf dem Golfplatz, kleinen Dramen, meckernden Weiberrunden, verständnisvollen Männern und Geschichten zwischen Entscheidung, Fairway und Pro-Shop.",
    descriptionShop:
      "Der Band, mit dem Esther Hohmeister ihr öffentliches Dichten begann: Geschichten von glücklichen Nichtgolfern, Fairway-Kriegen, Seniorenturnieren, herbstlichen Frauentagen und kleinen Momenten im Pro-Shop. Humorvoll, pointiert und voller Wiedererkennen für alle, die Golf lieben.",
    price: "CHF 14.–",
    cover: "images/ForeGolfgedichte1.jpg",
    alt: "Cover des Gedichtbandes Fore! Ein gemalter Golfball liegt auf dem Green"
  }
];

// Bestell-E-Mail-Adresse
const ORDER_EMAIL = "esther@hohmeister.ch";

// Datum für Betreff formatieren (CH-Format)
function formatDateCH(date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  return `${d}.${m}.${y}`;
}

// --------------------------------------
// Lightbox für vergrößerte Coveransicht
// --------------------------------------
let lightboxEl = null;
let lightboxImg = null;

function ensureLightbox() {
  if (lightboxEl) return;

  lightboxEl = document.createElement("div");
  lightboxEl.className = "image-lightbox";

  const img = document.createElement("img");
  img.className = "image-lightbox__img";
  lightboxEl.appendChild(img);
  lightboxImg = img;

  // Schließen-Button (runde Pill) unten mittig
  const closeBtn = document.createElement("button");
  closeBtn.className = "image-lightbox__close-btn";
  closeBtn.textContent = "×";

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lightboxEl.classList.remove("image-lightbox--visible");
  });

  lightboxEl.appendChild(closeBtn);

  // Klick auf Overlay schliesst ebenfalls
  lightboxEl.addEventListener("click", () => {
    lightboxEl.classList.remove("image-lightbox--visible");
  });

  document.body.appendChild(lightboxEl);
}

function openLightbox(src, alt) {
  ensureLightbox();
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightboxEl.classList.add("image-lightbox--visible");
}

// --------------------------------------
// 2) Book-Card erstellen (Home & Shop)
// --------------------------------------
function createBookCard(book, context) {
  const article = document.createElement("article");
  article.className = "book-card";
  article.id = book.id;

  // Bildbereich
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "book-card__image-wrapper";

  const img = document.createElement("img");
  img.src = book.cover;
  img.alt = book.alt;
  img.className = "book-card__image";

  imageWrapper.appendChild(img);

  // Bild klickbar machen: Lightbox
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    openLightbox(book.cover, book.alt);
  });

  // Titel + Meta
  const title = document.createElement("h3");
  title.className = "book-card__title";
  title.innerHTML = `
    ${book.title}<br>
    <span class="book-card__meta">${book.meta}</span>
  `;

  // Beschreibung – je nach Kontext unterschiedliche Texte
  const desc = document.createElement("p");
  desc.className = "book-card__description";
  desc.textContent = context === "home"
    ? book.descriptionHome
    : book.descriptionShop;

  // Actions (Button + optional Preis/Versand)
  const actions = document.createElement("div");
  actions.className = "book-card__actions";

  let actionElement;

  if (context === "shop") {
    // Mailto-Link mit Buchtitel + Meta + HEUTIGEM Datum im Betreff
    const today = new Date();
    const dateStr = formatDateCH(today);
    const subject = `Bestellung: ${book.title} (${book.meta}), ${dateStr}`;

    actionElement = document.createElement("a");
    actionElement.className = "button button-primary book-card__button";
    actionElement.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}`;
    actionElement.textContent = "Bestellen";
  } else {
    // Startseite: Link zur Blättern-Seite zum passenden Buch
    actionElement = document.createElement("a");
    actionElement.className = "button button-secondary book-card__button";
    actionElement.textContent = "Zum Buch";
    actionElement.href = `blaettern.html#${book.id}`;
  }

  actions.appendChild(actionElement);

  // Preis + Versandhinweis nur im Shop
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

  // Card zusammenbauen
  article.appendChild(imageWrapper);
  article.appendChild(title);
  article.appendChild(desc);
  article.appendChild(actions);

  return article;
}

// --------------------------------------
// 3) Spezielle Placeholder-Kachel (Shop)
// --------------------------------------
function createPlaceholderCard() {
  const article = document.createElement("article");
  article.className = "book-card book-card--placeholder";

  const inner = document.createElement("div");
  inner.className = "book-card__placeholder-inner";

  inner.innerHTML = `
    <h1 class="placeholder-title">
      Stöbern,<br>
      finden,<br>
      verbinden!
      <p class="placeholder-subtitle">Entedecken Sie die Werke von Esther Hohmeister – für sich.</p>
    </h1>
  `;

  article.appendChild(inner);
  return article;
}

// --------------------------------------
// 4) Render-Funktion: Container befüllen
// --------------------------------------
function renderBooks(targetId, context) {
  const container = document.getElementById(targetId);
  if (!container) return;

  // Im Shop zuerst die Placeholder-Kachel
  if (context === "shop") {
    const placeholder = createPlaceholderCard();
    placeholder.style.setProperty("--i", 0);
    container.appendChild(placeholder);
  }

  // alle Bände rendern
  BOOKS.forEach((book, index) => {
    const card = createBookCard(book, context);
    card.style.setProperty("--i", index + 1);
    container.appendChild(card);
  });
}

// --------------------------------------
// 5) Beim Laden der Seite ausführen
// --------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  ensureLightbox();

  // Startseite: Karussell
  renderBooks("home-book-carousel", "home");

  // Shop: Grid
  renderBooks("shop-book-grid", "shop");

  // Karussell-Pfeile (Startseite)
  const carousel = document.getElementById("home-book-carousel");
  const left = document.querySelector(".arrow-left");
  const right = document.querySelector(".arrow-right");

  if (carousel && left && right) {
    const scrollAmount = 260 + 16; // ≈ Kartenbreite + Abstand

    left.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    right.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});
