
const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");
const sections = document.querySelectorAll("main section[id]");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

function handleScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);

  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    current = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

document.getElementById("year").textContent = new Date().getFullYear();
