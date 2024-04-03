const router = require('express').Router();

// GET Requests to home
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
