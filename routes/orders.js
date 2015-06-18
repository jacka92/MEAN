var express = require('express');
var router = express.Router();
var page1Service = require('../Services/page1-service');

router.get('/', function(req, res, next) {
  res.render('orders/index', { title: 'Place an order' });
});

router.get('/page2', function(req, res, next) {
  res.render('orders/page2', { title: 'Place an order' });
});

router.post('/page2', function(req, res, next) {
  page1Service.addPage1(req.body, function(err){
    if(err){
    var vm = {
      title: 'Page 1', 
      input: req.body,
      error: 'Something went wrong: ' + err
    };
    return res.render('/orders/', vm);
  }
  //redirect to page 2
  res.render('orders/page2');
  });
});

router.post('/page3', function(req, res, next){
  res.render('orders/page3');
})


module.exports = router;
