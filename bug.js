const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  // Missing error handling and response
});
app.listen(3000, () => console.log('Server listening on port 3000'));