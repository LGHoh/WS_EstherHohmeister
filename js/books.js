// js/books.js

// 1) Zentrale Datenquelle: alle Gedichtbände an einem Ort
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
  alt: "Cover des mintfarbigen Gedichtbandes aus den Jahren 2020–2023"
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
  alt: "Cover des Gedichtbandes Gedichte 2016–2019 mit grauem Hintergrund"
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
  alt: "Cover des Gedichtbandes Gedichte 2012–2015 mit hellem Hintergrund"
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
  alt: "Cover des Gedichtbandes Fore! Golfgedichte 2 mit zwei gemalten Golfbällen"
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
  alt: "Cover des Gedichtbandes Fore! Golfgedichte mit gemaltem Golfball"
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
  article.dataset.bookId = book.id;

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

    
// "Mehr lesen"/"Weniger lesen" Button hinzufügen
const toggleBtn = document.createElement("button");
toggleBtn.className = "book-card__toggle";
toggleBtn.textContent = "Mehr lesen";

toggleBtn.addEventListener("click", () => {
  const container = article.closest(".book-list") || article.parentElement;

  const collapsedHeight =
    5.4 * parseFloat(getComputedStyle(desc).fontSize); // muss zu CSS height: 5.4em passen

  const collapseCard = (cardEl) => {
    const d = cardEl.querySelector(".book-card__description");
    const t = cardEl.querySelector(".book-card__toggle");
    if (!d || !t) return;

    // Nur wenn wirklich offen
    if (!cardEl.classList.contains("is-expanded")) return;

    // Von aktueller Höhe smooth zurück zur collapsed Höhe
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

    // Zielhöhe messen
    d.style.height = "auto";
    const targetH = d.scrollHeight;

    // zurück auf Start, dann animieren
    d.style.height = `${startH}px`;
    d.offsetHeight; // reflow
    d.style.height = `${targetH}px`;

    t.textContent = "Weniger lesen";

    const onEnd = () => {
      d.removeEventListener("transitionend", onEnd);
      // nach dem Expand: auto, damit responsive
      if (cardEl.classList.contains("is-expanded")) {
        d.style.height = "auto";
      }
    };
    d.addEventListener("transitionend", onEnd);
  };

  const isOpening = !article.classList.contains("is-expanded");

  // 1) Wenn wir öffnen: alle anderen schließen (Akkordeon)
  if (isOpening && container) {
    container.querySelectorAll(".book-card.is-expanded").forEach((openCard) => {
      if (openCard !== article) collapseCard(openCard);
    });
    expandCard(article);
  } else {
    // 2) Wenn wir schließen: nur diese Karte schließen
    collapseCard(article);
  }
});



    
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
    actionElement.textContent = "Zum Shop";
    actionElement.href = `shop.html#${book.id}`;
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
article.appendChild(toggleBtn);
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
      <p class="placeholder-subtitle">Entedecken Sie die Werke von Esther Hohmeister – für sich oder für andere.</p>
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

  // Shop: Placeholder zuerst
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

  // Home: 3x rendern (vorher / echt / nachher) -> „unsichtbares“ Infinite
  if (context === "home") {
    const sets = 3; // 3 identische Sets
    for (let s = 0; s < sets; s++) {
      BOOKS.forEach((book, index) => {
        const card = createBookCard(book, context);

        // keine doppelten IDs im DOM!
        // statt article.id = book.id besser: data attribute verwenden
        card.removeAttribute("id");
        card.dataset.bookId = book.id;

        // optional: für Debug
        card.dataset.set = String(s);

        container.appendChild(card);
      });
    }
  }
}

// Hilfsfunktion: Alle Karten in einem Karussell zurücksetzen
function resetCarouselCards(carouselEl) {
  if (!carouselEl) return;

  carouselEl.querySelectorAll(".book-card").forEach((card) => {
    card.classList.remove("is-expanded");

    const desc = card.querySelector(".book-card__description");
    const btn = card.querySelector(".book-card__toggle");

    if (desc) {
      desc.style.height = "";     // wichtig: inline height entfernen
    }
    if (btn) {
      btn.textContent = "Mehr lesen";
    }
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
  const getScrollAmount = () => {
    const style = getComputedStyle(document.documentElement);
    const cardWidth = parseInt(style.getPropertyValue("--book-card-width"));
    const gap = 16; // falls var(--space-m) = 1rem
    return cardWidth + gap;
  };

  // Wir haben 3 Sets gerendert -> mittleres Set ist „safe zone“
  const setWidth = BOOKS.length * getScrollAmount();

  // Start: mittleres Set
  carousel.style.scrollBehavior = "auto";
  carousel.scrollLeft = setWidth;
  requestAnimationFrame(() => {
    carousel.style.scrollBehavior = "smooth";
  });

  // Loop: wenn zu weit links/rechts, um genau 1 SetWidth korrigieren
  let isAdjusting = false;
  const keepInMiddle = () => {
    if (isAdjusting) return;

    const x = carousel.scrollLeft;

    // Wenn im linken Set unterwegs -> +1 Set
    if (x < setWidth * 0.25) {
      isAdjusting = true;
      carousel.style.scrollBehavior = "auto";
      carousel.scrollLeft = x + setWidth;
      requestAnimationFrame(() => {
        carousel.style.scrollBehavior = "smooth";
        isAdjusting = false;
      });
    }

    // Wenn im rechten Set unterwegs -> -1 Set
    if (x > setWidth * 1.75) {
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

  // Pfeile: nur manuell scrollen
  left.addEventListener("click", () => {
    carousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    carousel.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });
}

});
