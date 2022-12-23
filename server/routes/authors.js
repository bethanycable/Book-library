const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorControllers');

router.get('/authors', authorController.getAuthors, (req, res) => {
  return res.json({ authors: res.locals.authors });
});

router.post('/authors', authorController.addAuthors, (req, res) => {
  return res.json(res.locals.authors);
});

module.exports = router;
