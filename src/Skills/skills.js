// Start specific skills logic when the page loads
document.addEventListener("DOMContentLoaded", function() {
    console.log("Skills page loaded successfully!");
    
    // Staggered animation for tech pills to pop in one by one
    const pills = document.querySelectorAll('.tech-pill');
    pills.forEach((pill, index) => {
        pill.style.opacity = '0';
        pill.style.transform = 'translateY(10px)';
        pill.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setTimeout(() => {
            pill.style.opacity = '1';
            pill.style.transform = 'translateY(0)';
        }, 300 + (index * 60)); // Delay increases for each pill
    });
});