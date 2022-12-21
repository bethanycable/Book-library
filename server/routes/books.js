const express = require('express');
const router = express.Router();

const booksController = require('../controllers/bookControllers');

router.get('/books', booksController.getBooks, (req, res) => {
  // return res.json([
  //   // {
  //   //   title: 'The Graveyard Book',
  //   //   author: 'Neil Gaimen',
  //   // },
  //   // {
  //   //   title: 'Good Omens',
  //   //   author: 'Neil Gaimen & Terry Pratchet',
  //   // },
  // ]);

  return res.send('We were able to make a call to our database!');
});

module.exports = router;
