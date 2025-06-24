const sections = document.querySelectorAll("section");

// Появление секций при прокрутке
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Параллакс эффект с двумя слоями
const bgBack = document.querySelector(".bg-layer-back");
const bgFront = document.querySelector(".bg-layer-front");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  bgBack.style.transform = `translateY(${scroll * 0.1}px)`;  // дальний план
  bgFront.style.transform = `translateY(${scroll * 0.3}px)`; // ближний план
});
