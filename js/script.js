 //Header script
 
 // Intersection Observer setup
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const target = entry.target;
        
        if (entry.isIntersecting) {
            // Element is in view
            target.classList.add('fade-in');
            target.classList.remove('fade-out');
        } else {
            // Element is out of view
            target .classList.remove('fade-in');
            target.classList.add('fade-out');
        }
    });
}, observerOptions);


//Mobile header script

// Mobile menu toggle function
function toggleMenu() {
const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

if (mobileMenu.classList.contains('active')) {
mobileMenu.classList.remove('active');
hamburger.classList.remove('active');
} else {
mobileMenu.classList.add('active');
hamburger.classList.add('active');
}
}

// Auto close menu when screen size increases
window.addEventListener('resize', function() {
const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
mobileMenu.classList.remove('active');
hamburger.classList.remove('active');
}
});

// Close menu when a dropdown item is selected
document.querySelector('.mobile-menu').addEventListener('click', function(e) {
if (e.target.tagName === 'A') { // Check if clicked element is a link
const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

mobileMenu.classList.remove('active');
hamburger.classList.remove('active');
}
});


//Homepage script

// Select all elements to animate
const animateElements = document.querySelectorAll(`
    .welcome-text, 
    .school-name, 
    .school-logo, 
    .text-content p, 
    .enroll-btn, 
    .learn-btn, 
    .contact-info,
    .about-us,
    .our-team,
    .footer,
    .card,
    .footer-section
`);

// Observe all elements
animateElements.forEach(element => {
    observer.observe(element);
});

//if needed please create new script file this is the root script  -Chivar