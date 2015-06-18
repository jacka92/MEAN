var express = require('express');
var router = express.Router();
var userService = require('../Services/user-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  userService.addUser(req.body, function(err){
    if(err){
    var vm = {
      title: 'Create an account', 
      input: req.body,
      error: 'Something went wrong'
    };
    return res.render('users/create', vm);
  }
  //redirect to index view in orders directory
  res.redirect('/orders');
  });
});

module.exports = router;
