var mongoose = require('mongoose');
var assignmentModel = require('../models/assignment.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var sortValue = parseInt(req.query.sort) || 1;
    var searchValue = req.query.name || "";
    assignmentModel.find({name: new RegExp(searchValue, 'i')}, null, {sort:{name: sortValue}},
        function(err, data){res.json(data)});
});

router.get('/search/:name', function(req, res, next) {
    assignmentModel.find({name: new RegExp(req.params.name, 'i')},function (err, todos) {
        if (err) return next(err);
        res.json(todos);
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