// js/books.js

// 1) Zentrale Datenquelle: alle Gedichtbände an einem Ort
const BOOKS = [
  {
    id: "band1",
    title: "Gedichte",
    meta: "Gedichtband · 2020-2023",
    descriptionHome: "Humorvolle Einblicke in das Leben auf dem Golfplatz und darüber hinaus.",
    descriptionShop: "Humorvolle Einblicke in das Leben auf dem Golfplatz – von kleinen Entscheidungen bis zu grossen Fairway-Geschichten.",
    price: "CHF 28.–",
    cover: "images/Gedichte2020-2023.jpg",
    alt: "Cover des Gedichtbandes Der Golfplatz ist eine Welt"
  },
  {
    id: "band2",
    title: "Gedichte",
    meta: "Gedichteband · 2016-2019",
    descriptionHome: "Der zweite Band über Ausreden, Marotten und Herzensmomente auf dem Golfplatz.",
    descriptionShop: "Der zweite Band widmet sich den Marotten, Ausreden und Herzensmomenten von Golferinnen und Golfern.",
    price: "CHF 28.–",
    cover: "images/Gedichte2.jpg",
    alt: "Cover des Gedichtbandes Noch mehr Fairway-Geschichten"
  },
  {
    id: "band3",
    title: "Gedichte",
    meta: "Gedichtband · 2012-2015",
    descriptionHome: "Gedichte aus dem täglichen Leben – heiter, berührend und mit einer Prise Ironie.",
    descriptionShop: "Gedichte aus dem Alltag: Beobachtungen, Begegnungen und kleine Geschichten, die in Sprache verwandelt werden.",
    price: "CHF 26.–",
    cover: "images/Gedichte1.jpg",
    alt: "Cover des Gedichtbandes Alltag in Versform"
  },
  {
    id: "band4",
    title: "Fore! Golfgedichte 2",
    meta: "Gedichtband · 2013",
    descriptionHome: "Geschichten und Gedichte aus der Welt zwischen Abschlag und Loch 19.",
    descriptionShop: "Ein Band voller Szenen, Dialoge und Gedanken, die sich zwischen Tee und Loch 19 ereignen.",
    price: "CHF 26.–",
    cover: "images/ForeGolfgedichte2.jpg",
    alt: "Cover des Gedichtbandes Zwischen Tee und Loch 19"
  },
  {
    id: "band5",
    title: "Fore! Golfgedichte",
    meta: "Gedichtband · 2011",
    descriptionHome: "Gedichte, inspiriert von Stichworten und Momenten aus der Leserschaft.",
    descriptionShop: "Ein Band, der zeigt, wie aus zugerufenen Stichworten und Alltagsbeobachtungen neue Gedichte entstehen.",
    price: "CHF 30.–",
    cover: "images/ForeGolfgedichte1.jpg",
    alt: "Cover des Gedichtbandes Worte aus der Leserschaft"
  }
];

// 2) Hilfsfunktion: erstellt eine Book-Card für Home oder Shop
function createBookCard(book, context) {
  const article = document.createElement("article");
  article.className = "book-card";

  // Bildbereich
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "book-card__image-wrapper";

  const img = document.createElement("img");
  img.src = book.cover;
  img.alt = book.alt;
  img.className = "book-card__image";

  imageWrapper.appendChild(img);

  // Titel + Meta
  const title = document.createElement("h3");
  title.className = "book-card__title";
  title.innerHTML = `
    ${book.title}<br>
    <span class="book-card__meta">${book.meta}</span>
  `;

  // Beschreibung – je nach Kontext unterschiedliche Texte möglich
  const desc = document.createElement("p");
  desc.className = "book-card__description";
  desc.textContent = context === "home"
    ? book.descriptionHome
    : book.descriptionShop;

  // Actions (Button + optional Preis)
  const actions = document.createElement("div");
  actions.className = "book-card__actions";

  const button = document.createElement("button");
  button.className = "button " + (context === "shop" ? "button-primary" : "button-secondary") + " book-card__button";
  button.textContent = context === "shop" ? "Bestellen" : "Mehr erfahren";

  // Hier könntest du später noch z. B. ein onclick für ein Modal o.ä. setzen

  actions.appendChild(button);

  // Preis nur im Shop sichtbar
  if (context === "shop") {
    const price = document.createElement("span");
    price.className = "book-card__price";
    price.textContent = book.price;
    actions.appendChild(price);
  }

  // Card zusammenbauen
  article.appendChild(imageWrapper);
  article.appendChild(title);
  article.appendChild(desc);
  article.appendChild(actions);

  return article;
}

// 3) Spezielle Placeholder-Kachel für den Shop (6. Kachel)
function createPlaceholderCard() {
  const article = document.createElement("article");
  article.className = "book-card book-card--placeholder";

  const inner = document.createElement("div");
  inner.className = "book-card__placeholder-inner";

  inner.innerHTML = `
    <h2>Stöbern, finden, sich verbinden</h2>
    <p>Entdecken Sie Gedichte, Geschichten und Momente, die Sie begleiten.</p>
  `;

  article.appendChild(inner);
  return article;
}

// 4) Render-Funktion: füllt einen Container mit Cards
function renderBooks(targetId, context) {
  const container = document.getElementById(targetId);
  if (!container) return;

  // alle Bände rendern
if (context === "shop") {
  const placeholder = createPlaceholderCard();
  container.appendChild(placeholder);
}

BOOKS.forEach((book) => {
  const card = createBookCard(book, context);
  container.appendChild(card);
});

}

// 5) Beim Laden der Seite: Home & Shop befüllen (falls Container vorhanden)
document.addEventListener("DOMContentLoaded", () => {
  renderBooks("home-book-carousel", "home");
  renderBooks("shop-book-grid", "shop");
});
