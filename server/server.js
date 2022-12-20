const express = require('express');
const app = express();
const path = require('path');
const books = require('./routes/books');

app.use('/api/books', books);
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/api', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000);
