const fs = require('fs')
const path = require('path')
const getRoutePositionInDir = require('./getRoutePositionInDir');
const listFilesInDir = require('./listFilesInDir');
const log = require('./log');
const colors = require('colors');

// the targetFilepath MUST be in the SAME directory that the filepath is
// EG: ("index.js", "about.js")
module.exports = (filepath, targetFile) => {
	const thisDirPath = path.parse(filepath).dir;
	// targetFile is a file within the same dir of targetFilepath
	const fullTargetPath = path.normalize(`/` + thisDirPath + '/' + path.parse(targetFile).name + ".html")

	return fullTargetPath
}
