// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
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

// Button click effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Smooth scroll
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

// Parallax effect on hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-bg');
    parallaxElements.forEach((element, index) => {
        if (scrolled < element.offsetHeight) {
            element.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// Animate battery level on scroll
const batteryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const batteryLevel = entry.target.querySelector('.battery-level');
            if (batteryLevel) {
                batteryLevel.style.height = '85%';
            }
        }
    });
}, { threshold: 0.5 });

const batteryContainer = document.querySelector('.battery-container');
if (batteryContainer) {
    batteryObserver.observe(batteryContainer);
}