const express = require('express');
const router = express.Router();

router.get('/books', (req, res) => {
  return res.json([
    {
      title: 'The Graveyard Book',
      author: 'Neil Gaimen',
    },
    {
      title: 'Good Omens',
      author: 'Neil Gaimen & Terry Pratchet',
    },
  ]);
});

module.exports = router;
