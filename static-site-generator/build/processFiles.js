const fs = require('fs');
const path = require('path');
const generatePage = require('./generatePage')
const readFiles = require('./readFiles')
const readFile = require('./readFile')
const getTemplate = require('./getTemplate')
const generateTemplateMap = require('./generateTemplateMap')

// path where all the views are stored
const viewsDir = path.resolve(process.cwd(), 'src/views')

// get a list of templates that each file wants to use
const templateMap = generateTemplateMap()

// list of HtmlWebpackPlugin pages for building 
const pages = []

// list of avaliable routes (views)
const routes = []
readFiles(viewsDir, ({ title, filepath }) => {
	routes.push({ title, filepath })
});

const getNav = (route, filepath) => {
	const doesExist = (route) => {
		return route != undefined
	}

	const isInSameFileDir = (route, filepath) => {
		return path.parse(route.filepath).dir == path.parse(filepath).dir
	}
	
	return (doesExist(route) && isInSameFileDir(route, filepath)) ? route : ''
}

routes.forEach((route, i) => {
	const template = getTemplate(templateMap, route.title)
	// navigation = getPrevAndNextInDir(routes, i)
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
		previous: getNav(routes[i - 1], route.filepath),
		next: getNav(routes[i + 1], route.filepath),
	}))
})

// console.log(templateMap)
// console.log(routes)
// console.log(pages)
module.exports = pages;

// ,
//     {
//         "title": "notes",
//         "directory": false,
//         "path": "",
//         "templatePath": "./template-notes.ejs"
//     }