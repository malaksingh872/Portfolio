function initHeader() {
    // Dynamically fetch and inject the header HTML
    fetch('/header/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            console.log("Header loaded successfully!");

            // Highlight the active navigation link based on the current URL
            document.querySelectorAll('.nav-links a').forEach(link => {
                const linkPath = link.getAttribute('href');
                const currentPath = window.location.pathname;
                
                if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html') || currentPath.endsWith(linkPath)) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading header:', error));
}

// Run immediately if the DOM is already parsed, otherwise wait for it
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
} else {
    initHeader();
}