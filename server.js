const express = require('express');
const path = require('path');

const app = express();
// Use Cloud Run's dynamic PORT environment variable, or fallback to 3000 locally
const PORT = process.env.PORT || 3000;

// Serve static assets (like home.css and home.js) from the src/home folder securely
app.use(express.static(path.join(__dirname, 'src', 'home')));

// Serve static assets for the Skills folder so CSS/JS load correctly
app.use('/skill', express.static(path.join(__dirname, 'src', 'skill')));
app.use('/Skills', express.static(path.join(__dirname, 'src', 'Skills')));

// Route the root URL directly to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'home', 'index.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'Skills', 'skills.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});