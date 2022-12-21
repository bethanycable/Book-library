const db = require('../models/booksModel');

const booksController = {};

booksController.getBooks = (req, res, next) => {
  const queryString = 'SELECT * FROM books_read;';
  db.query(queryString)
    .then((result) => {
      console.log('SQL Call: ', result.rows);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = booksController;
