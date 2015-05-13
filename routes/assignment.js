var mongoose = require('mongoose');
var assignmentModel = require('../models/assignment.js');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next){
    assignmentModel.find(function(err, data){
        response.json(data);
    });
});

router.get('/:id', function(req, res, next) {
    assignmentModel.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/', function(request, response, next){
    assignmentModel.create(request.body, function(err, post){
        if(err) return next(err);
        response.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    assignmentModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    assignmentModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;