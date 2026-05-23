const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static assets (like home.css and home.js) from the src/home folder securely
app.use(express.static(path.join(__dirname, 'src', 'home')));

// Route the root URL directly to home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'home', 'home.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});