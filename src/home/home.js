/**
 * Fetches an HTML file and injects its content into a specified element.
 * Optionally loads associated CSS and JS files automatically.
 */
async function loadComponent(elementId, componentPath, loadCss = true, loadJs = true) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Could not load ${componentPath}`);
        
        const htmlContent = await response.text();
        const placeholder = document.getElementById(elementId);
        
        if (placeholder) {
            placeholder.innerHTML = htmlContent;

            if (loadCss) {
                const cssPath = componentPath.replace('.html', '.css');
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = cssPath;
                document.head.appendChild(link);
            }

            if (loadJs) {
                const jsPath = componentPath.replace('.html', '.js');
                const script = document.createElement('script');
                script.src = jsPath;
                document.body.appendChild(script);
            }
        }
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", async function() {
    // Dynamically load the header (and footer if you have one)
    await loadComponent("header-placeholder", "../header and footer/header.html");

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