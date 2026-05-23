const roles = [
    "a Student & Aspiring Engineer",
    "Software Developer",
    "CAD Designer",
    "a Tech Enthusiast",
    "a Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Timing variables
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.querySelector('.typing-text');

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
    let speed = isDeleting ? deletingSpeed : typingSpeed;

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
    if (roles.length > 0) {
        setTimeout(typeEffect, 500);
    }
});