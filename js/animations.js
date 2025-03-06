/**
 * Animations JavaScript file
 * Contains various animation functions and effects
 */

// Create a typing effect for elements with class 'typing-effect'
const createTypingEffect = (element, words, typingSpeed = 150, deleteSpeed = 100, pauseTime = 1500) => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of the word
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                isDeleting = true;
                type();
            }, pauseTime);
            return;
        } 
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        const speed = isDeleting ? deleteSpeed : typingSpeed;
        if (!isPaused) {
            setTimeout(type, speed);
        }
    }
    
    // Start the typing effect
    if (element) {
        type();
    }
};

// Parallax scroll effect for background elements
const createParallaxEffect = (element, speed = 0.5) => {
    if (!element) return;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        element.style.transform = `translateY(${scrollY * speed}px)`;
    });
};

// Scroll reveal animation
const createScrollReveal = () => {
    const elements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                
                // Add delay based on the data attribute or index
                const delay = el.dataset.delay || 0;
                
                setTimeout(() => {
                    el.classList.add('revealed');
                }, delay);
                
                observer.unobserve(el);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typewriter effect on the homepage
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const words = ['websites.', 'applications.', 'experiences.'];
        createTypingEffect(typewriterElement, words);
    }
    
    // Setup scroll reveal animations
    createScrollReveal();
});