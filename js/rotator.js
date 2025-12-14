document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".word-rotator__track");
  const viewport = document.querySelector(".word-rotator__viewport");
  if (!track || !viewport) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const words = ["Worte", "Gedichte", "Geschichten", "Freude", "Begegnungen"];
  const itemHeight = viewport.getBoundingClientRect().height;

  // Track initial füllen: erstes Wort ist schon im HTML
  track.innerHTML = "";
  words.forEach((w) => {
    const span = document.createElement("span");
    span.className = "word-rotator__item";
    span.textContent = w;
    track.appendChild(span);
  });

  let i = 0;
  const interval = 2800;

  setInterval(() => {
    i = (i + 1) % words.length;
    track.style.transform = `translateY(-${i * itemHeight}px)`;
  }, interval);
});
