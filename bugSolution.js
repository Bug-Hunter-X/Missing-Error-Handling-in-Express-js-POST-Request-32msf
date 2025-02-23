const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    // Validate request body
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ error: 'Missing name or email' });
    }

    // Database interaction or other operation that may throw an error
    // ...

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));