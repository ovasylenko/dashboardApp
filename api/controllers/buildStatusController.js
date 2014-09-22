/**
 * BuildstatusController
 *
 * @description :: Server-side logic for managing buildstatuses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getAll: function(req, res) {
		var fs = require('fs');
		var filePath=__dirname +'/../data/initialData.json';
		var obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
		obj.dateStamp = new Date();
		res.json(obj);

	},
	getUpdate:function(){

	},
	sendMessage: function(req, res) {

		var fs = require('fs');
		var filePath=__dirname +'/../data/1.json';
		var obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
		sails.io.sockets.emit('new_build', {build: obj});

		res.json(obj);
	}
};

