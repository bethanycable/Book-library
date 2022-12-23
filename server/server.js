const express = require('express');
const app = express();
const path = require('path');
const bookRouter = require('./routes/books');
const authorRouter = require('./routes/authors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', bookRouter, authorRouter);
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);
