const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./routes/indexRoute.js');
const connectToDatabase = require('./db/dbConfig');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', router);  // Make sure the router is correct

// Database connection
connectToDatabase();

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
