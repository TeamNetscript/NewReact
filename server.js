const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Allow preflight requests to return immediately
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});


// Serve a welcome message at the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the login server');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Here you would perform actual authentication, for simplicity, we'll just check if username and password are provided
  if (username && password) {
    // Mock token generation - you might want to use a JWT library for generating tokens
    const token = 'mock-token';
    res.json({ token });
  } else { 
    res.status(400).json({ error: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
