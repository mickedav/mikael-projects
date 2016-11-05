var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    heading: String,
    text: String,
    image: String,
    published: { type: Date },
    publisher: String,
    publisherId: String,
});

var Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;
