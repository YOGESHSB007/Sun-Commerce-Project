// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Sticky Navbar
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("fixed", "top-0", "left-0", "right-0");
    navbar.classList.add("relative");
  } else {
    navbar.classList.remove("relative");
    navbar.classList.add("fixed", "top-0", "left-0", "right-0");
  }

  lastScroll = currentScroll;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
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

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
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

// Active Navigation Link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-purple-600", "font-bold");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("text-purple-600", "font-bold");
    }
  });
});

// Form Validation (if you add a contact form)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\+\-\(\)]+$/;
  return re.test(phone);
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Console welcome message
console.log(
  "%cSun Commerce",
  "color: #9333ea; font-size: 24px; font-weight: bold;"
);
console.log("%cLet Solar be your saviour!", "color: #f59e0b; font-size: 16px;");
console.log("Website: sun-commerce.com.au");
console.log("Phone: +61 404 451 977");

// Animate steps inside #process on scroll
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll("#process .process-step");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  steps.forEach((step) => {
    step.classList.add(
      "opacity-0",
      "translate-y-10",
      "transition",
      "duration-700"
    );
    observer.observe(step);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.5 }
  );

  cards.forEach((card) => {
    card.classList.add(
      "opacity-0",
      "translate-y-10",
      "transition",
      "duration-700"
    );
    observer2.observe(card);
  });
});


// Intersection Observer for animations
const observerOptions4 = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
      }
  });
}, observerOptions4);

document.querySelectorAll('.animate-fadeInUp').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer4.observe(el);
});


// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
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
const yearElement = document.querySelector('footer p');
if (yearElement && yearElement.textContent.includes('<?php')) {
  yearElement.textContent = `© ${new Date().getFullYear()} Sun Commerce. All rights reserved.`;
}


// Animate process timeline steps
const processSteps = document.querySelectorAll(".process-timeline > div");
const processObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
        }, index * 150);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

processSteps.forEach((step, index) => {
  step.style.opacity = "0";
  step.style.transition = "all 0.6s ease-out";
  if (index % 2 === 0) {
    step.style.transform = "translateX(-50px)";
  } else {
    step.style.transform = "translateX(50px)";
  }
  processObserver.observe(step);
});

// Configuration
const WHATSAPP_NUMBER = '918088744966'; // India country code + number
const DEFAULT_MESSAGE = 'Hello! I am interested in solar energy solutions. Can you please help me?';

// Elements
const whatsappBtn = document.getElementById('whatsappBtn');
const whatsappOverlay = document.getElementById('whatsappOverlay');
const whatsappPopup = document.getElementById('whatsappPopup');
const closePopup = document.getElementById('closePopup');
const whatsappDMBtn = document.getElementById('whatsappDMBtn');
const notificationBadge = document.getElementById('notificationBadge');
const optionButtons = document.querySelectorAll('.option-btn');

// Open popup
whatsappBtn.addEventListener('click', () => {
    whatsappOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Hide WhatsApp button and notification badge when popup is opened
    whatsappBtn.style.display = 'none';
    if (notificationBadge) {
        notificationBadge.style.display = 'none';
    }
});

// Close popup
closePopup.addEventListener('click', closeWhatsAppPopup);

// Close on overlay click
whatsappOverlay.addEventListener('click', (e) => {
    if (e.target === whatsappOverlay) {
        closeWhatsAppPopup();
    }
});

// Close popup function
function closeWhatsAppPopup() {
    whatsappOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
    // Show WhatsApp button when popup is closed
    whatsappBtn.style.display = 'flex';
}

// Direct to WhatsApp on button click
whatsappDMBtn.addEventListener('click', () => {
    openWhatsApp(DEFAULT_MESSAGE);
});

// Option buttons click
optionButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let message = '';
        switch(index) {
            case 0:
                message = 'Hi! I am interested in solar solutions. Can you provide more information?';
                break;
            case 1:
                message = 'Hello! I would like to know more about residential solar installation.';
                break;
            case 2:
                message = 'Hi! I need information about commercial solar systems.';
                break;
            default:
                message = DEFAULT_MESSAGE;
        }
        openWhatsApp(message);
    });
});

// Open WhatsApp function
function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    closeWhatsAppPopup();
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !whatsappOverlay.classList.contains('hidden')) {
        closeWhatsAppPopup();
    }
});

// Optional: Show notification badge after some time
setTimeout(() => {
    if (notificationBadge) {
        notificationBadge.style.display = 'flex';
    }
}, 3000);