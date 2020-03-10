const fs = require('fs');
const path = require('path');
const generatePage = require('./generatePage')
const readFiles = require('./readFiles')
const getTemplate = require('./getTemplate')
const generateTemplateMap = require('./generateTemplateMap')
const getRoutePositionInDir = require('./getRoutePositionInDir')
const listFilesInDir = require('./listFilesInDir')
const getPrevRoute = require('./getPrevRoute')

// path where all the views are stored
const viewsDir = path.resolve(process.cwd(), 'src/views')

// list of HtmlWebpackPlugin pages for building 
const pages = []

// list of avaliable routes (views)
const routes = []
readFiles(viewsDir, ({ title, filepath }) => {
	routes.push({ title, filepath })
});

// get a list of templates that each file wants to use
const templateMap = generateTemplateMap(routes)
console.log(`Read in ${templateMap.length} files`)

routes.forEach((route, i) => {
	const template = getTemplate(templateMap, route.title)

	// get a next and previous route for the filepath in the current directory
	// if no route is found or the relative index +-1 becomes undefined it will not be rendered
	// relativeIndex gets the position the the current routes filepath. eg 0, 1 etc within its directory
	const relativeIndex = getRoutePositionInDir(templateMap, route.filepath)
	// get all the files in the parent of this filepath
	const filesInDir = listFilesInDir(templateMap, getPrevRoute(templateMap, route.filepath))
	// set next/prev filepath to one of the files in the parent directory of this filepath
	// +-1 to get the offset neighbour from its relative index in the parent directory 
	const next = filesInDir[relativeIndex + 1]
	const prev = filesInDir[relativeIndex - 1]

	pages.push(generatePage({
		// Path needs to take a path without an extension. Examples: about, notes/blog
		//where to write the file in dist
		path: (route.title === 'index') ? '' : route.filepath,
		// the base template to use
		template: template,
		// the title of the page
		title: route.title,
		// tells EJS to use this js file to populate its template body 
		target: route.filepath,
		// previous and next in same route dir (if there is one)
		previous: prev,
		next: next,
		// favicon requires config.output.publicPath = '/' in webpack to work
		favicon: './src/media/favicon.ico'
	}))
})

// console.log(templateMap)
// console.log(routes)
// console.log(pages)
module.exports = pages;
