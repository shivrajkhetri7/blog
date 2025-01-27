const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const router = require('./routes/indexRoute');
const connectToDatabase= require('./db/dbConfig');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

connectToDatabase();

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})