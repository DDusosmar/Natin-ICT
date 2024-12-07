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
            target.classList.remove('fade-in');
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

const animateElements = document.querySelectorAll(`
    .welcome-text, 
    .school-name, 
    .school-logo, 
    .text-content p, 
    .enroll-btn, 
    .learn-btn, 
    .contact-info,
    .enroll-info,
    .about-us,
    .our-team,
    .experiences,
    .experiences__card,  
    .footer,
    .card,
    .footer-section,
    .class-info,
    .ps,
    .sec
`);

// Observe all elements
animateElements.forEach(element => {
    observer.observe(element);
});

// Mobile menu toggle function
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');

    if (mobileMenu.classList.contains('active')) {
        // Closing the menu
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Restore header state based on scroll position
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    } else {
        // Opening the menu
        mobileMenu.classList.add('active');
        hamburger.classList.add('active');
        
        // Make header transparent when menu is open
        header.classList.remove('scrolled');
    }
}

// Add scroll event listener to manage header state
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Only add/remove scrolled class if mobile menu is not active
    if (!mobileMenu.classList.contains('active')) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Slideshow functionality
let slideIndex = 0;

// Function to show slides
function showSlides(n) {
    const slides = document.getElementsByClassName("class-info");
    slideIndex = n; // Update slideIndex to the clicked card index
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    
    slides[slideIndex].style.display = "block";  // Show the current slide
}

// Set default slide to Year 1
document.addEventListener("DOMContentLoaded", function() {
    showSlides(0); // Show Year 1 slide by default
});

// Attach click event listeners to course cards
document.querySelectorAll('.course-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        showSlides(index);
        scrollToSlideshow(); // Smooth scroll to the slideshow
    });
});

// Smooth scroll to the slideshow section
function scrollToSlideshow() {
    const slideshowSection = document.querySelector('.slideshow-container');
    slideshowSection.scrollIntoView({ behavior: 'smooth' });
}


// Popup Form Functionality
const enrollBtn = document.getElementById('enrollBtn');
const enrollPopup = document.getElementById('enrollPopup');
const closeBtn = document.querySelector('.close-btn');
const enrollForm = document.getElementById('enrollForm');

// Open popup when enroll button is clicked
enrollBtn.addEventListener('click', () => {
    enrollPopup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    enrollPopup.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === enrollPopup) {
        enrollPopup.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
});

// Handle form submission
enrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const description = document.getElementById('description').value;
    
    // Create mailto link with form data
    const subject = encodeURIComponent('New Enrollment Application');
    const body = encodeURIComponent(
        `First Name: ${firstName}\n` +
        `Last Name: ${lastName}\n` +
        `Description: ${description}`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:chivar.business@gmail.com?subject=${subject}&body=${body}`;
    
    // Close the popup
    enrollPopup.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
    
    // Reset form
    enrollForm.reset();
});
