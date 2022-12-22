const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorControllers');

router.get('/authors', authorController.getAuthors, (req, res) => {
  return res.send(res.locals.authors);
});

module.exports = router;
