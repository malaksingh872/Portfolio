// Highlight the active navigation link based on the current URL
console.log("Header loaded successfully!");

document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = link.getAttribute('href');
    const currentPath = window.location.pathname;
    
    // Checks for exact path match, root index match, or local file system matching
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html') || currentPath.endsWith(linkPath)) {
        link.classList.add('active');
    }
});