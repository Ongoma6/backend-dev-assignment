const express = require('express');
const app = express();
const port = 3000;

// Require the authRoutes file
const authRoutes = require('./routes/authRoutes');

app.use(express.json()); // Middleware to parse JSON request bodies

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js server!');
})
// Use the authRoutes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
