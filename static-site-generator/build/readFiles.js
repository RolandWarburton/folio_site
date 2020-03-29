const fs = require('fs')
const path = require('path')
const util = require('util')
const readFile = require('./readFile')

// const readFile = util.promisify(fs.readFile)
// const readDir = util.promisify(fs.readdir)
// Takes a function called processFiles to pass each file back to its caller 
// module.exports = async function readFiles(dir, processFiles) {
// 	const fileList = [];
// 	readDir(dir)
// 		.then(filenames => {
// 			filenames.forEach((filename) => {
// 				// console.log(processFiles)
// 				const filepath = dir + '/' + path.parse(filename).name;
// 				// fileList.push({
// 				// 	filepath: filepath,
// 				// 	title: path.parse(filename).name,
// 				// 	distpath: filepath.replace(/\s/g, ''),
// 				// 	// template: getTemplate(routeMap, title)
// 				// })
// 				processFiles({
// 					// return the filepath without an extension
// 					filepath: filepath,
// 					// return the filename of the filepath without an extension
// 					title: path.parse(filename).name
// 				})
// 			})
// 		})
// }

// Takes a function called processFiles to pass each file back to its caller 
module.exports = function readFiles(dir, processFiles, relativeDir = "src/views", traverse = true) {
	fs.readdirSync(dir)
		.forEach(filename => {
			const filepath = path.resolve(dir, filename)
			const title = path.parse(filename).name;
			const ext = path.parse(filename).ext;
			const stat = fs.statSync(filepath);
			const isFile = stat.isFile();
			const isDir = stat.isDirectory();

			if (isFile) {
				readFile(filepath, processFiles, "src/views")
			}

			// keep traversing new directories to map out the entire site
			if (traverse && title != 'partials' && isDir) {
				readFiles(filepath, processFiles, "src/views")
			}
		});
}
