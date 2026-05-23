document.addEventListener("DOMContentLoaded", () => {
    // Adjust the fetch path if your folder has a different name
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
            
            // Replace placeholders in the page with the fetched HTML
            if (navPlaceholder && nav) navPlaceholder.replaceWith(nav);
            if (footerPlaceholder && footer) footerPlaceholder.replaceWith(footer);
        })
        .catch(error => console.error('Error loading shared layout:', error));
});