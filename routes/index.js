var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js Project - Linya' });
});

router.get('/video', function(req, res, next) {
    res.render('video', { title: 'Node.js Project - Linya' });
});

router.get('/music', function(req, res, next) {
    res.render('music', {music: true});
});

module.exports = router;
