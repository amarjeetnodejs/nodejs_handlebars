var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MY Portfolio', someVariable: 'example' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', someVariable: 'example' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'My Project', someVariable: 'example' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', someVariable: 'example' });
});
router.post('/contactre', function(req, res, next) {
  	res.json( { message: "Message has been send." } );
});

module.exports = router;