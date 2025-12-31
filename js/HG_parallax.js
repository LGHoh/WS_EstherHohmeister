document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".has-parallax");
  if (!sections.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    sections.forEach((section) => {
      const bg = section.querySelector(".parallax-bg");
      if (bg) bg.style.transform = "translate3d(0, 0, 0)";
    });
    return;
  }

  let ticking = false;

  const updateAll = () => {
    ticking = false;

    const vh = window.innerHeight || 1;

    sections.forEach((section) => {
      const bg = section.querySelector(".parallax-bg");
      if (!bg) return;

      const rect = section.getBoundingClientRect();
      const progress = 1 - (rect.top + rect.height) / (vh + rect.height);
      const strength = parseFloat(getComputedStyle(section).getPropertyValue("--parallax-strength")) || 60;

      const y = (progress - 0.5) * strength;
      bg.style.transform = `translate3d(0, ${y}px, 0)`;
    });
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateAll);
    }
  };

  updateAll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateAll);
});
