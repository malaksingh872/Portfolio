const roles = [
    "Mechatronics Student",
    "Software Developer",
    "CAD Designer",
    "a Tech Enthusiast",
    "a Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingElement = null;

// Timing variables
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000;

function typeEffect() {
    if (!typingElement) return; // Safety check

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        // Remove a character
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add a character
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Determine the speed of the next frame
    // Add slight randomness to typing speed for a more natural, human feel
    let speed = isDeleting ? deletingSpeed : typingSpeed + (Math.random() * 50 - 25);

    // If word is fully typed out
    if (!isDeleting && charIndex === currentRole.length) {
        speed = delayBetweenWords; // Pause at the end
        isDeleting = true;
    } 
    // If word is fully deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next word
        speed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, speed);
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
    typingElement = document.querySelector('.typing-text');
    if (roles.length > 0 && typingElement) {
        setTimeout(typeEffect, 500);
    }
});

// Load shared header and footer
document.addEventListener("DOMContentLoaded", () => {
    fetch('../shared/layout.html')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load layout.html");
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            
            const nav = doc.querySelector('.top-nav');
            const footer = doc.querySelector('.cyber-footer');
            
            const navPlaceholder = document.getElementById('nav-placeholder');
            const footerPlaceholder = document.getElementById('footer-placeholder');
            
            if (navPlaceholder && nav) navPlaceholder.replaceWith(nav);
            if (footerPlaceholder && footer) footerPlaceholder.replaceWith(footer);
        })
        .catch(error => console.error('Error loading shared layout:', error));
});