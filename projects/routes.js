var App = require("./../core/core");
var projects = require("./projects-service")	;

var baseUrl = "/projects"
module.exports = function() {

	App.Express.get( baseUrl, function (req, res) {
			projects.getprojects()
			.then(function(response) {
				res.send(response);
			});
	});
};
