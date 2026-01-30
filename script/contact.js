// Intersection Observer for scroll animations
const observerOptions1 = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions1);

// Observe all animated elements
document.querySelectorAll(".opacity-0").forEach((el) => {
  observer1.observe(el);
});

// Form submission handler
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Get form data
//     const formData = new FormData(this);

//     // Show success message
//     const successMessage = document.getElementById('successMessage');
//     successMessage.classList.add('show');

//     // Reset form
//     this.reset();

//     // Hide success message after 5 seconds
//     setTimeout(() => {
//         successMessage.classList.remove('show');
//     }, 5000);

//     // In a real application, you would send the data to a server here
//     console.log('Form submitted:', Object.fromEntries(formData));
// });

// FAQ Toggle Function
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");
  const allContents = document.querySelectorAll(".faq-content");
  const allIcons = document.querySelectorAll(".faq-button svg");

  // Close all other FAQs
  allContents.forEach((item) => {
    if (item !== content) {
      item.classList.add("hidden");
    }
  });

  // Reset all other icons
  allIcons.forEach((item) => {
    if (item !== icon) {
      item.style.transform = "rotate(0deg)";
    }
  });

  // Toggle current FAQ
  content.classList.toggle("hidden");

  // Rotate icon
  if (content.classList.contains("hidden")) {
    icon.style.transform = "rotate(0deg)";
  } else {
    icon.style.transform = "rotate(180deg)";
  }
}

// Smooth scroll for buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

// Add input validation feedback
document.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.trim() !== "") {
      this.classList.add("border-green-500");
      this.classList.remove("border-red-500");
    } else if (this.hasAttribute("required")) {
      this.classList.add("border-red-500");
      this.classList.remove("border-green-500");
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-fadeInUp").forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
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

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add hover effect to social icons
document.querySelectorAll(".social-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.1) rotate(5deg)";
  });

  icon.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1) rotate(0deg)";
  });
});

// Dynamic year for copyright
const yearElement = document.querySelector("footer p");
if (yearElement && yearElement.textContent.includes("<?php")) {
  yearElement.textContent = `© ${new Date().getFullYear()} Sun Commerce. All rights reserved.`;
}

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
// const mobileMenuLinks = mobileMenu.querySelectorAll("a");
// mobileMenuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     mobileMenu.classList.add("hidden");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    console.warn("Contact form not found on this page");
    return;
  }

  // Form input animations
  const formInputs = contactForm.querySelectorAll("input, textarea");
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.classList.add("ring-2", "ring-yellow-400", "border-yellow-400");
    });

    input.addEventListener("blur", function () {
      this.classList.remove("ring-2", "ring-yellow-400", "border-yellow-400");
    });
  });

  // Form submission handler
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("Contact form submission started...");

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalButtonHTML = submitBtn.innerHTML;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    submitBtn.classList.add("opacity-75", "cursor-not-allowed");

    // Get form values
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const phone = contactForm.querySelector('input[name="phone"]').value;
    const subject = contactForm.querySelector('input[name="subject"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    // Prepare template parameters for EmailJS
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    console.log("Contact Form Template Parameters:", templateParams);

    try {
      // Check if EmailJS is initialized
      if (typeof emailjs === "undefined") {
        throw new Error(
          "EmailJS is not loaded. Please refresh the page and try again."
        );
      }

      // Send email using EmailJS
      // Replace with your actual Service ID and Template ID
      const response = await emailjs.send(
        "service_mlmp89q", // Replace with your EmailJS Service ID
        "template_8r9sepq", // Replace with your EmailJS Template ID
        templateParams
      );

      console.log(
        "✅ Contact form submitted successfully!",
        response.status,
        response.text
      );
      
      // RESET BUTTON IMMEDIATELY - ADD THIS
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalButtonHTML;
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      
      // Show success message
      showSuccessMessage(contactForm);
      
      // Reset form after delay
      setTimeout(() => {
        // Clear all input fields manually
        const form = document.getElementById("contactForm");
        if (form) {
          const inputs = form.querySelectorAll("input, textarea");
          inputs.forEach((input) => (input.value = ""));
        }
        hideSuccessMessage();
      }, 5000);
    } catch (error) {
      console.error("❌ Contact form submission failed:", error);

      // Show error message
      showErrorMessage(error, contactForm);

      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalButtonHTML;
      submitBtn.classList.remove("opacity-75", "cursor-not-allowed");
    }
  });

  // Success message display function
  function showSuccessMessage(form) {
    // Show the hidden success message div
    const successMessage = document.getElementById("successMessage");
    if (successMessage) {
      successMessage.style.display = "flex";
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      // Fallback: Create success notification if element doesn't exist
      const successDiv = document.createElement("div");
      successDiv.className =
        "success-notification bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-6 animate-fade-in flex items-center gap-3";
      successDiv.innerHTML = `
              <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                  <h3 class="text-lg font-bold text-green-800 mb-1">Message Sent Successfully!</h3>
                  <p class="text-green-700">Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
              </div>
          `;

      form.insertBefore(successDiv, form.firstChild);
      successDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // Error message display function
  function showErrorMessage(error, form) {
    // Remove any existing error messages
    const existingMessage = form.querySelector(".error-notification");
    if (existingMessage) {
      existingMessage.remove();
    }

    const errorDiv = document.createElement("div");
    errorDiv.className =
      "error-notification bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mb-6 animate-fade-in";

    let errorMessage = "Unable to send message. ";

    if (error.text) {
      errorMessage += `Error: ${error.text}. `;
    } else if (error.message) {
      errorMessage += error.message + ". ";
    }

    errorMessage +=
      "Please try again or contact us directly at info@suncommerce.com.au";

    errorDiv.innerHTML = `
          <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
              </svg>
              <div>
                  <h3 class="text-lg font-bold text-red-800 mb-2">Submission Failed</h3>
                  <p class="text-red-700 mb-3">${errorMessage}</p>
                  <div class="text-sm text-red-600">
                      <p class="font-semibold mb-1">Please check:</p>
                      <ul class="list-disc list-inside space-y-1">
                          <li>Your internet connection</li>
                          <li>All required fields are filled correctly</li>
                          <li>Email format is valid</li>
                          <li>Phone number is in correct format</li>
                      </ul>
                  </div>
              </div>
          </div>
      `;

    form.insertBefore(errorDiv, form.firstChild);
    errorDiv.scrollIntoView({ behavior: "smooth", block: "center" });

    // Auto-hide error message after 10 seconds
    setTimeout(() => {
      errorDiv.style.opacity = "0";
      errorDiv.style.transition = "opacity 0.5s ease-out";
      setTimeout(() => errorDiv.remove(), 500);
    }, 10000);
  }

  // Hide success message function
  function hideSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    if (successMessage) {
      successMessage.style.display = "none";
    }

    // Also remove any dynamically created success notifications
    const successDiv = contactForm.querySelector(".success-notification");
    if (successDiv) {
      successDiv.style.opacity = "0";
      successDiv.style.transition = "opacity 0.5s ease-out";
      setTimeout(() => successDiv.remove(), 500);
    }
  }

  // Phone number validation (Australian format)
  const phoneInput = contactForm.querySelector('input[name="phone"]');
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      // Allow numbers, spaces, plus sign, and hyphens
      let value = e.target.value;

      // Remove any characters that aren't numbers, spaces, +, or -
      value = value.replace(/[^\d\s\+\-]/g, "");

      e.target.value = value;
    });

    phoneInput.addEventListener("blur", function (e) {
      const value = e.target.value.replace(/\s/g, ""); // Remove spaces for validation

      // Check if it's a valid Australian phone number format
      // Accepts formats like: +61404451977, 0404451977, +61 404 451 977, etc.
      // const phoneRegex = /^(\+61|0)[0-9]{9}$|^(\+61\s?|0)[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}$/;

      // if (value.length > 0 && !phoneRegex.test(value.replace(/\s/g, ''))) {
      //     e.target.setCustomValidity('Please enter a valid Australian phone number (e.g., +61 404 451 977 or 0404 451 977)');
      //     e.target.reportValidity();
      // } else {
      //     e.target.setCustomValidity('');
      // }
    });
  }

  // Email validation enhancement
  const emailInput = contactForm.querySelector('input[name="email"]');
  if (emailInput) {
    emailInput.addEventListener("blur", function (e) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (e.target.value && !emailRegex.test(e.target.value)) {
        e.target.setCustomValidity("Please enter a valid email address");
        e.target.reportValidity();
      } else {
        e.target.setCustomValidity("");
      }
    });
  }

  // Name validation (at least 2 characters)
  const nameInput = contactForm.querySelector('input[name="name"]');
  if (nameInput) {
    nameInput.addEventListener("blur", function (e) {
      if (e.target.value.trim().length < 2) {
        e.target.setCustomValidity(
          "Please enter your full name (at least 2 characters)"
        );
        e.target.reportValidity();
      } else {
        e.target.setCustomValidity("");
      }
    });
  }

  // Subject validation (at least 5 characters)
  const subjectInput = contactForm.querySelector('input[name="subject"]');
  if (subjectInput) {
    subjectInput.addEventListener("blur", function (e) {
      if (e.target.value.trim().length < 5) {
        e.target.setCustomValidity(
          "Please enter a subject (at least 5 characters)"
        );
        e.target.reportValidity();
      } else {
        e.target.setCustomValidity("");
      }
    });
  }

  // Message validation (at least 10 characters)
  const messageInput = contactForm.querySelector('textarea[name="message"]');
  if (messageInput) {
    messageInput.addEventListener("blur", function (e) {
      if (e.target.value.trim().length < 10) {
        e.target.setCustomValidity(
          "Please enter a message (at least 10 characters)"
        );
        e.target.reportValidity();
      } else {
        e.target.setCustomValidity("");
      }
    });
  }

  console.log("✅ Contact form script loaded successfully");
});

// Add fade-in animation via CSS
const style = document.createElement("style");
style.textContent = `
  @keyframes fade-in {
      from {
          opacity: 0;
          transform: translateY(-10px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }
  
  .animate-fade-in {
      animation: fade-in 0.3s ease-out;
  }
  
  #successMessage {
      display: none;
  }
  
  .input-focus {
      transition: all 0.3s ease;
      border: 2px solid transparent;
  }
  
  .input-focus:focus {
      outline: none;
      border-color: #facc15;
      box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.1);
  }
`;
document.head.appendChild(style);
