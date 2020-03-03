const fs = require('fs');
const path = require('path');
const generatePage = require('./generatePage')
const readFiles = require('./readFiles')
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


routes.forEach((route, i) => {
	// console.log(route.filepath.split("/static-site-generator/src/views/")[1])
	const template = getTemplate(templateMap, route.title)
	// const currentDir = route.filepath.split("/")[0]
	const nextDir = (routes[i + 1] !== undefined) ? routes[i + 1].filepath.split("/")[0] : ''
	const prevDir = (routes[i - 1] !== undefined) ? routes[i - 1].filepath.split("/")[0] : ''
	console.log(route.filepath)
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
		previous: (prevDir && prevDir != 'index') ? routes[i - 1] : '',
		next: (nextDir && nextDir != 'index') ? routes[i + 1] : ''
	}))
})

console.log(templateMap)
console.log(routes)
// console.log(pages)
module.exports = pages;

// ,
//     {
//         "title": "notes",
//         "directory": false,
//         "path": "",
//         "templatePath": "./template-notes.ejs"
//     }