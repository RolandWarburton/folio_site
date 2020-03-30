const fs = require('fs')
const path = require('path')
const getRoutePositionInDir = require('./getRoutePositionInDir');
const listFilesInDir = require('./listFilesInDir');
const getLinkToHtmlFilepath = require('./getLinkToHtmlFilepath');
const log = require('./log');

module.exports = (filepath) => {

	// get directory of the filepath
	const currentDirectory = path.parse(filepath.fullPath).dir
	log(`the file ${filepath.path} is in ${currentDirectory}`, "disabled")

	// get the files in the filepaths directory
	const filesInDir = listFilesInDir(currentDirectory, filepath.path)

	// get the position of the filepath in the directory
	const relativeIndex = getRoutePositionInDir(currentDirectory, filepath.path)
	log(`the rel index of dir = ${relativeIndex}`, "disabled")

	// if the files is 1 or less then it returns the wrong values
	// this is because the relative index is is -1 if its doesn't exist and evaluates to index 0
	const next = (filesInDir.length > 1) ? filesInDir[relativeIndex + 1] : undefined
	const prev = (filesInDir.length > 1) ? filesInDir[relativeIndex - 1] : undefined

	const nextFilepath = (next) ? getLinkToHtmlFilepath(filepath.path, next) : "#"
	const prevFilepath = (prev) ? getLinkToHtmlFilepath(filepath.path, prev) : "#"

	// log(`${prevFilepath}\t|\t${nextFilepath}`, "high")
	if (next) {
		const thisDirPath = path.parse(filepath.path).dir;
		const nextDirPath = path.normalize(`/` + thisDirPath + '/' + next)
		// log(nextDirPath, "high")
		// fs.readFileSync()
	}

	// if (next) log(`${filepath.path} = ${path.resolve(process.cwd(), next)}`)

	// log the neighbours for debugging
	// log(`(getFilepathNeighbours) ${filepath.path}\t\t\tprev = ${prev} next = ${next}`, "low")

	return {
		next: {
			// get the hyperlink to its neighbor
			filepath: nextFilepath,
			title: next
		},
		prev: {
			// get the hyperlink to its neighbor
			filepath: prevFilepath,
			title: prev
		}
	}
}
