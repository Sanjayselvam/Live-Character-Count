const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

let lastText = '';

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/submit', (req, res) => {
    lastText = req.body.text || '';
    res.json({ success: true });
});

app.get('/last', (req, res) => {
    res.json({ text: lastText });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});