// ===================================
// Navigation Active Link Handler
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Set active link based on current scroll position
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const navLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            
            if (navLink && rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Initial call
});

// ===================================
// Smooth Scroll Enhancement
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('.btn');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Message Sent! ✓';
        submitButton.style.backgroundColor = '#27ae60';
        
        // Reset form
        this.reset();
        
        // Restore button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.backgroundColor = '';
        }, 3000);
    });
}

// ===================================
// Scroll Animation for Elements
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe blog cards for animation
document.querySelectorAll('.blog-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===================================
// Mobile Menu Toggle (Optional Enhancement)
// ===================================

function adjustLayoutForMobile() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        // Mobile-specific adjustments can be made here
    }
}

window.addEventListener('resize', adjustLayoutForMobile);
adjustLayoutForMobile();

// ===================================
// Utility Functions
// ===================================

// Get current year for footer (optional)
function updateFooterYear() {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer p:first-child');
    if (footerText) {
        footerText.textContent = `© ${year} Gyan Guragain. All rights reserved.`;
    }
}

updateFooterYear();

// Log page load
console.log('Welcome to Gyan Guragain\'s Personal Blog');
console.log('Teacher at St. Xavier\'s School, Godavari, Lalitpur, Nepal');
