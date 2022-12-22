const db = require('../models/booksModel');

const authorController = {};

authorController.getAuthors = (req, res, next) => {
  const queryString = `SELECT authors.* FROM authors;`;

  db.query(queryString)
    .then((res) => {
      console.log(res.rows);
      res.locals.authors = res.rows;
      return next();
    })
    .catch((err) =>
      next(`This is the error message in authorController: ${err}`)
    );
};

module.exports = authorController;
