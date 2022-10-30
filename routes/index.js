var express = require('express');
var router = express.Router();

/* Get Projects Page*/
router.get('/', function(req, res, next) { 
  res.render('index', {title: 'Home'})
  
});

/* GET home page. */
router.get('/home', function(req, res, next) { 
  res.render('index', {title: 'Home'})
  
});

/* Get Projects Page*/
router.get('/projects', function(req, res, next) { 
  res.render('', {title: 'Projects'})
  
});

/* Get About Page*/
router.get('/about', function(req, res, next) { 
  res.render('index', {title: 'About'})

});

/* Get Contact Page*/
router.get('/contact', function(req, res, next) { 
  res.render('index', {title: 'Contact'})
  
});




module.exports = router;
