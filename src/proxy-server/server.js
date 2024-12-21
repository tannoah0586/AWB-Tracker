import dotenv from 'dotenv';
dotenv.config();

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('listening on port 3000...');
});

// const API_KEY = process.env.API_KEY;
// const BASE_URL = 'https://api.airtable.com/v0/';