// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", function() {

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

    // Timing variables
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 2000;

    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement || roles.length === 0) return; // Safety check

    function typeEffect() {
        const currentRole = roles[roleIndex];

        // Adjust the character index first
        isDeleting ? charIndex-- : charIndex++;
        
        // Update the text content cleanly in one place
        typingElement.textContent = currentRole.substring(0, charIndex);

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

    setTimeout(typeEffect, 500);
});