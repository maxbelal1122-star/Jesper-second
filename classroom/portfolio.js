const navToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const progressBars = document.querySelectorAll(".bar-fill");
const revealElements = document.querySelectorAll(".fade-in");
const form = document.querySelector("#contact-form");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const observerOptions = {
  threshold: 0.12,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach((el) => revealObserver.observe(el));

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-links a[href='#${id}']`);
      if (entry.isIntersecting) {
        navItems.forEach((link) => link.classList.remove("active"));
        navLink?.classList.add("active");
      }
    });
  },
  { threshold: 0.35 },
);

sections.forEach((section) => {
  scrollObserver.observe(section);
});

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const bar = entry.target.querySelector(".bar-fill");
      const width = bar.dataset.value;
      bar.style.width = width;
      progressObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2 },
);

const progressContainers = document.querySelectorAll(".progress-row");
progressContainers.forEach((container) => progressObserver.observe(container));

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitButton = form.querySelector("button");
  submitButton.textContent = "Sent ✓";
  form.reset();
  setTimeout(() => {
    submitButton.textContent = "Send message";
  }, 2200);
});
