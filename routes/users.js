var express = require('express');
var router = express.Router();
var userService = require('../Services/user-service');

/*Url's here are already mounted with a base url of /users*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/create', vm);
});

router.post('/login', function(req, res, next) {
  //Ask user service to handle db
  userService.addUser(req.body, function(err){
    if(err){
    var vm = {
      title: 'Create an account', 
      input: req.body,
      error: 'Something went wrong: ' + err
    };
    return res.render('users/create', vm);
  }
  //redirect to index view in orders directory
  res.redirect('/orders');
  });
});

//Route method here above password auth for session remembrance
/*router.post('/login', function(req, res, next){
  
});*/

module.exports = router;
