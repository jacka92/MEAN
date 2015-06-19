var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')
var spursData = require('../spurs/xlsxparse');

router.get('/', restrict, function(req, res, next) {
  //Push data to db
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  var vm = {
    title: 'Personal Statistics',
    firstName: req.user ? req.user.firstName : null
  };
  res.render('orders/index', vm);
});

module.exports = router;
