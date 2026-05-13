// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Dark mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// Typing text
const typingText = document.getElementById("typingText");
const texts = [
  "Pelajar yang tertarik dengan teknologi",
  "Belajar coding dan desain digital",
  "Membangun portofolio dan prestasi",
  "Suka belajar hal baru"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 45 : 85);
}

typeEffect();

// Reveal animation saat scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Navbar aktif saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Filter penghargaan
const filterButtons = document.querySelectorAll(".filter-btn");
const awardCards = document.querySelectorAll(".award-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    awardCards.forEach((card) => {
      if (filter === "semua" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Modal detail penghargaan
function openModal(title, text) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = text;
  document.getElementById("modal").classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

// Tutup menu ketika link diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
