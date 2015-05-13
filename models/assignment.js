var mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema ({
    name: String,
    score: Number,
    date_completed: Date
});

module.exports = mongoose.model('Assignment', assignmentSchema);