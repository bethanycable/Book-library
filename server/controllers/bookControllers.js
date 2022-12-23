const db = require('../models/booksModel');

const booksController = {};

booksController.getBooksRead = (req, res, next) => {
  const queryString =
    'SELECT books_read.*, authors.* FROM books_read LEFT OUTER JOIN authors ON books_read.author_id = authors.author_id;';
  db.query(queryString)
    .then((result) => {
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

booksController.getToReadBooks = (req, res, next) => {
  const queryString =
    'SELECT books_to_read.*, authors.* FROM books_to_read LEFT OUTER JOIN authors ON books_to_read.author_id = authors.author_id;';
  db.query(queryString)
    .then((result) => {
      res.locals.toReadBooks = result.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

booksController.addBooksRead = (req, res, next) => {
  const body = req.body;

  // const authorQueryString = `SELECT author_id, first_name, last_name FROM authors WHERE authors.first_name = '($1)' AND authors.last_name = '($2)';`;
  // const authorValues = [body.first_name, body.last_name];

  // const newAuthorQuery =
  //   'INSERT INTO authors (first_name, last_name) VALUES ($1, $2) RETURNING author_id;';

  // db.query(authorQueryString, authorValues)
  //   .then((response) => {
  //     if (response === null || undefined) {
  //       db.query(newAuthorQuery, authorValues)
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((err) => next(err));
  //     } else {
  //       response.rows;
  //     }
  //   })
  //   .catch((err) => {
  //     return next(err);
  //   });

  const bookQueryString =
    'INSERT INTO books_read (book_title, author_id) VALUES ($1, $2) RETURNING _id;';

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
