// Get a simple express server up and running
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Looks for port locally on port 5000 and for Heroku as environment variable
const PORT = process.env.PORT || 5000;

// Pass in PORT and what happens once it connects
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));