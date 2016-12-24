var config = require("./../config");
var mongoose = require('mongoose');
var Projects = require("./Projects");
var when = require('when');
function ProjectsService() {
	var self = this;

	mongoose.connect(config.db_connectionString);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
	});

	self.getprojects = function(){
		var deferred = when.defer();

		Projects.find({}).sort({id: -1}).exec(function(err, projects) {
			deferred.resolve(projects);
	  });

		return deferred.promise;
	};
}
module.exports = new ProjectsService();
