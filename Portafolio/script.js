// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll (simple + smooth)
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Theme toggle (optional)
const themeBtn = document.getElementById("themeBtn");
const key = "creyes_theme";
const saved = localStorage.getItem(key);
if (saved === "dark") document.body.classList.add("dark");

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(key, document.body.classList.contains("dark") ? "dark" : "light");
});
