const express = require('express');
const router = express.Router();

// Mock user data
const mockUser = {
  username: 'testuser',
  password: 'testpassword' // In a real application, this should be hashed
};

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

module.exports = router;
