const db = require('../models/booksModel');

const booksController = {};

booksController.getBooksRead = (req, res, next) => {
  const queryString =
    'SELECT books_read.*, authors.* FROM books_read LEFT OUTER JOIN authors ON books_read.author_id = authors.author_id;';
  db.query(queryString)
    .then((result) => {
      //   console.log('SQL Call: ', result.rows);
      res.locals.readBooks = result.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

booksController.getBooksLiked = (req, res, next) => {
  const queryString =
    'SELECT liked_books.*, authors.* FROM liked_books LEFT OUTER JOIN authors ON liked_books.author_id = authors.author_id;';
  db.query(queryString)
    .then((result) => {
      res.locals.likedBooks = result.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

booksController.getBooksDisliked = (req, res, next) => {
  const queryString =
    'SELECT disliked_books.*, authors.* FROM disliked_books LEFT OUTER JOIN authors ON disliked_books.author_id = authors.author_id;';
  db.query(queryString)
    .then((result) => {
      res.locals.dislikedBooks = result.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

booksController.addBooksRead = (req, res, next) => {
  const body = req.body;

  const bookQueryString =
    'INSERT INTO books_read (book_title, author_id) VALUES ($1, $2) RETURNING _id';

  const insertValues = [body.book_title, body.author_id];
  db.query(bookQueryString, insertValues)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = booksController;
