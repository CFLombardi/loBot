const {google} = require("googleapis");
const fs = require("fs");

exports.run = function(config, msg) {
	var driveToken = (config.developerMode) ? config.devDriveToken : config.driveToken;
	var drive = google.drive({
		version: 'v3',
		auth: driveToken
	});

	drive.files.list({
		q: name = "Bassnectar"
	}, function (err, res) {
		if(err) {
			console.error(err);
		} else {
			console.log(res.files);
		}
	});
}//this is the end of the run export
