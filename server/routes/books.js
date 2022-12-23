const express = require('express');
const router = express.Router();

const booksController = require('../controllers/bookControllers');

router.get('/readbooks', booksController.getBooksRead, (req, res) => {
  return res.send(res.locals.readBooks);
});
// router.post('/readbooks', booksController.addBooksRead, (req, res) => {
//   return res.send(res.locals.readBooks);
// });

router.get('/likedbooks', booksController.getBooksLiked, (req, res) => {
  return res.send(res.locals.likedBooks);
});

router.get('/dislikedbooks', booksController.getBooksDisliked, (req, res) => {
  return res.send(res.locals.dislikedBooks);
});

router.get('/toreadbooks', booksController.getToReadBooks, (req, res) => {
  return res.send(res.locals.toReadBooks);
});

module.exports = router;
