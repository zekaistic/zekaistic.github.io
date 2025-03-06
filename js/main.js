/**
 * Main JavaScript file
 * Contains common functionality used across the site
 */

// Detect when an element enters the viewport
const observeElements = () => {
    const observerOptions = {
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to observe
    const elementsToObserve = document.querySelectorAll('.project-card, .timeline-item, .skill-category, .contact-method');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
};

// Handle navigation active state
const handleNavigation = () => {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
};

// Update copyright year
const updateCopyrightYear = () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    updateCopyrightYear();
    observeElements();
    
    // Add animation classes
    document.querySelectorAll('.project-card, .timeline-item, .skill-category, .contact-method').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
});

// Add CSS styles programmatically for animation
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.in-view {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);