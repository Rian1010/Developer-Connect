// Get a simple express server up and running
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// Looks for port locally on port 5000 and for Heroku as environment variable
const PORT = process.env.PORT || 5000;

// Pass in PORT and what happens once it connects
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));