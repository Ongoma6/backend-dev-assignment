const mockUser = {
    username: 'testuser',
    password: 'testpassword' // In real scenarios, hash this password
  };
  
  exports.login = (req, res) => {
    const { username, password } = req.body;
  
    if (username === mockUser.username && password === mockUser.password) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  };
  