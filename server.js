const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const methodOverride = require('method-override');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB', err);
      });
    

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Jukebox API!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
