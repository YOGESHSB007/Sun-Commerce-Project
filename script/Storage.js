// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll(".opacity-0").forEach((el) => {
  observer.observe(el);
});

// Savings Calculator Function
function calculateSavings() {
  const monthlyBill =
    parseFloat(document.getElementById("monthlyBill").value) || 300;
  const dailyUsage =
    parseFloat(document.getElementById("dailyUsage").value) || 25;
  const solarSize =
    parseFloat(document.getElementById("solarSize").value) || 6.6;
  const peakRate = parseFloat(document.getElementById("peakRate").value) || 35;

  // Calculate potential savings (simplified algorithm)
  const batteryEfficiency = 0.9; // 90% round-trip efficiency
  const storedEnergy = Math.min(13.5, dailyUsage * 0.4); // Assume 40% can be stored
  const peakUsage = dailyUsage * 0.5; // 50% during peak hours
  const savingsPerDay = storedEnergy * batteryEfficiency * (peakRate / 100);

  const monthlySavings = Math.round(savingsPerDay * 30);
  const yearlySavings = Math.round(monthlySavings * 12);
  const tenYearSavings = Math.round(yearlySavings * 10);
  const paybackYears = (12000 / yearlySavings).toFixed(1); // Assume $12k system cost

  // Update display
  document.getElementById("monthlySavings").textContent = `${monthlySavings}`;
  document.getElementById(
    "yearlySavings"
  ).textContent = `${yearlySavings.toLocaleString()}`;
  document.getElementById(
    "tenYearSavings"
  ).textContent = `${tenYearSavings.toLocaleString()}`;
  document.getElementById(
    "paybackPeriod"
  ).textContent = `${paybackYears} years`;

  // Calculate environmental impact
  const co2Saved = ((dailyUsage * 365 * 0.82) / 1000).toFixed(1); // 0.82kg CO2 per kWh
  const treeEquiv = Math.round(co2Saved * 45); // 1 tree absorbs ~22kg CO2/year

  document.getElementById("co2Saved").textContent = co2Saved;
  document.getElementById("treeEquiv").textContent = treeEquiv;
}

// Initialize calculator on page load
window.addEventListener("load", calculateSavings);

// Button click effects
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

// Smooth scroll
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

// Intersection Observer for scroll animations
const observerOptions2 = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions2);

// Observe all animated elements
document.querySelectorAll(".opacity-0").forEach((el) => {
  observer2.observe(el);
});

// Smooth scroll for buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "";
    }, 150);
  });
});
