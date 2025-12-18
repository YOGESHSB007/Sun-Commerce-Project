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

// FAQ Accordion (fixed for 2-column layout)
document.querySelectorAll(".faq-button").forEach(button => {
    button.addEventListener("click", () => {
      const faqItem = button.closest(".faq-item");
      const answer = faqItem.querySelector(".faq-answer");
      const icon = faqItem.querySelector(".faq-icon");
  
      const isOpen = answer.style.maxHeight;
  
      // Close all other FAQs
      document.querySelectorAll(".faq-answer").forEach(otherAnswer => {
        otherAnswer.style.maxHeight = null;
      });
      document.querySelectorAll(".faq-icon").forEach(otherIcon => {
        otherIcon.classList.remove("rotate-180");
      });
  
      // Toggle current FAQ
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }
    });
  });
  

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    e.target.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const button = item.querySelector(".faq-button");
      const answer = item.querySelector(".faq-answer");
      const icon = item.querySelector(".faq-icon");
  
      button.addEventListener("click", () => {
        faqItems.forEach(other => {
          if (other !== item) {
            other.querySelector(".faq-answer").style.maxHeight = null;
            other.querySelector(".faq-icon").classList.remove("rotate-180");
          }
        });
  
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
          icon.classList.remove("rotate-180");
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.classList.add("rotate-180");
        }
      });
    });
  });
  