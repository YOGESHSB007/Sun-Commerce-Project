// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.remove('section-hidden');
                entry.target.classList.add('animate-fadeInUp');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections with section-hidden class
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-hidden');
    sections.forEach(section => observer.observe(section));
});

// Smooth scroll for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});


// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "pointer-events-none");
    backToTopButton.classList.add("opacity-100");
  } else {
    backToTopButton.classList.add("opacity-0", "pointer-events-none");
    backToTopButton.classList.remove("opacity-100");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Contact Button Actions
const contactButtons = document.querySelectorAll(
  "button:not(#mobile-menu-btn):not(#backToTop)"
);
contactButtons.forEach((button) => {
  if (button.textContent.includes("Contact Us")) {
    button.addEventListener("click", () => {
      window.location.href = "#contact";
    });
  }
  if (button.textContent.includes("Residential")) {
    button.addEventListener("click", () => {
      window.location.href = "#residential";
    });
  }
  if (button.textContent.includes("Commercial")) {
    button.addEventListener("click", () => {
      window.location.href = "#commercial";
    });
  }
});

// Mobile menu toggle
document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });

// Mobile dropdown functionality
document.querySelectorAll(".mobile-dropdown-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const svg = this.querySelector("svg");

    content.classList.toggle("hidden");
    svg.classList.toggle("rotate-180");
  });
});