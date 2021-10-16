const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('La brocante!'));
app.get('/', (req, res) => res.send('La seconde valeur après integration!'));
app.listen(port);
console.log(`App running on http://localhost:${port}`);
