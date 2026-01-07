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
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-fadeInUp, .animate-fadeInLeft, .animate-fadeInRight, .animate-scaleIn').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const button = item.querySelector(".faq-button");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (button && answer && icon) {
      button.addEventListener("click", () => {
        // Close all other FAQs
        faqItems.forEach(other => {
          if (other !== item) {
            const otherAnswer = other.querySelector(".faq-answer");
            const otherIcon = other.querySelector(".faq-icon");
            if (otherAnswer) otherAnswer.style.maxHeight = null;
            if (otherIcon) otherIcon.classList.remove("rotate-180");
          }
        });

        // Toggle current FAQ
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
          icon.classList.remove("rotate-180");
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.classList.add("rotate-180");
        }
      });
    }
  });
});

// Form submission (only if form exists)
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    e.target.reset();
  });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
      backToTopButton.style.opacity = '1';
      backToTopButton.style.pointerEvents = 'auto';
    } else {
      backToTopButton.classList.remove('show');
      backToTopButton.style.opacity = '0';
      backToTopButton.style.pointerEvents = 'none';
    }
  });
}

// Scroll to Top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add hover effect to social icons
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1) rotate(5deg)';
  });

  icon.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
  });
});

// Dynamic year for copyright
document.addEventListener('DOMContentLoaded', () => {
  const yearElements = document.querySelectorAll('footer p');
  yearElements.forEach(element => {
    if (element.textContent.includes('<?php')) {
      element.textContent = `© ${new Date().getFullYear()} Sun Commerce. All rights reserved.`;
    }
  });
});