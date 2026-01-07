 // Intersection Observer for scroll animations
 const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.opacity-0').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
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

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
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



// Configuration
const WHATSAPP_NUMBER = '610404451977'; // India country code + number
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