var express = require('express');
var router = express.Router();
var path = require('path');
var assignmentModel = require('../models/assignment.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.post('/', function(request, response, next){
  assignmentModel.create(request.body, function(err, post){
    if(err) return next(err);
      response.sendFile(path.resolve(__dirname, '../views/index.html'));
  });
});

console.log("index.js is loaded");

module.exports = router;
