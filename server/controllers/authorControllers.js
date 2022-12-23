const { query } = require('express');
const db = require('../models/booksModel');

const authorController = {};

authorController.getAuthors = (req, res, next) => {
  const queryString = `SELECT authors.* FROM authors;`;

  db.query(queryString)
    .then((result) => {
      console.log(result.rows);
      res.locals.authors = result.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error happening in authorController.getAuthors',
        status: 500,
        err,
      })
    );
};

authorController.addAuthors = (req, res, next) => {
  const body = req.body;
  const queryString =
    'INSERT INTO authors (first_name, last_name) VALUES ($1, $2) RETURNING author_id';

  const insertValues = [body.first_name, body.last_name];

  db.query(queryString, insertValues)
    .then((returnValue) => {
      res.locals.author_id = returnValue.rows[0][author_id];
      return next();
    })
    .catch((err) => next(err));
};

module.exports = authorController;
