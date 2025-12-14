// Schutz vor E-Mail-Bots – setzt Adresse erst im Browser zusammen
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".protected-email").forEach(el => {
    const user = el.dataset.user;
    const domain = el.dataset.domain;
    const email = `${user}@${domain}`;
    el.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-ready");
});


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("is-ready");
  }, 180); // 80–150ms sind meist angenehm
});
