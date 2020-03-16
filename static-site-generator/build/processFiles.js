const fs = require('fs-extra');
const path = require('path');
const readFiles = require('./readFiles')
const getTemplate = require('./getTemplate')
const generateRouteMap = require('./generateRouteMap')
const generateHtmlPage = require('./generateHtmlPage')
const getPrevRoute = require('./getPrevRoute')
const sass = require('node-sass');

// get some file directories to use later
const viewsDir = path.resolve(process.cwd(), 'src/views')
const appRootPath = path.resolve(process.cwd())

// make the distribution dir if it doesnt exist
const distPath = path.resolve(appRootPath, 'dist')
if (!fs.existsSync(distPath)) {
	fs.mkdirSync(distPath);
}

// copy media to the dist folder
fs.copy(path.resolve(appRootPath, 'src/media'), path.resolve(appRootPath, 'dist/media'), function (err) {
	if (err) {
		console.log('An error occured while copying the folder.')
		return console.error(err)
	}
	console.log('Copied media to dist')
});

// render out sass and write it to the dist folder
sass.render({
	file: path.resolve(appRootPath, 'src/styles/styles.scss'),
	outFile: path.resolve(appRootPath, 'dist/app.css'),
	outputStyle: 'compressed'
}, function (error, result) {
	if (!error) {
		fs.writeFile(path.resolve(appRootPath, 'dist/app.css'), result.css, function (err) {
			if (!err) { console.log('Copied styles to dist') }
		});
	} else {
		console.log(error)
	}
});

// list of HTML pages
const pages = []

// get a list of templates that each file wants to use
const routeMap = generateRouteMap()
console.log(`Read in ${routeMap.length} custom template targets`)

// generate the list of routes by traversing the src/views folder
const routes = []
readFiles(viewsDir, ({ filepath, title }) => {
	// push the route to an array to be used later
	routes.push({
		title: title,
		filepath: filepath,
		template: getTemplate(routeMap, title)
	})
})
console.log(`Got ${routes.length} routes`)

// create folders in dist for writing to later
routes.forEach(route => {
	// get the folder path we want to create
	const folderFilepath = path.resolve(appRootPath, distPath, route.filepath)
	// if it doesnt exist. recursively create the folder
	if (!fs.existsSync(folderFilepath) && route.filepath != 'index') {
		fs.mkdirSync(folderFilepath, { recursive: true });
	}
})

// write the routes to the routeMap file for later reference
fs.writeFileSync(process.cwd() + '/temp/routeMap.json', JSON.stringify(routes))

// genereate HTML for every route that we picked up in src/views and stored in routes
routes.forEach((route, i) => {
	const templateData = {
		user: 'john smith',
		title: route.title,
		filepath: route.filepath,
		backLink: getPrevRoute(routes, route.filepath),
		css: 'app.css'
	}

	// if the filepath happens to be the index file then drop 'index' from the last part of its file path
	// so the url will only be www.example.com/ not www.example.com/index
	const indexAppend = (route.filepath == 'index') ? '' : 'index'

	// create the exact filepath to write to. Append 'index' where needed to target that file
	// EG: [...]/dist/notes/notes.html for the URL www.example.com/notes
	const writePath = path.resolve(appRootPath, distPath, route.filepath, indexAppend) + '.html'

	// create page HTML here
	const html = generateHtmlPage(route.template, templateData, route.filepath)
	// push the html to an array if we need to access it later
	pages.push(html)
	// write the html file to its path in dist
	fs.writeFileSync(writePath, html, 'utf8');
})

console.log(`Exported ${pages.length} HTML page templates!`)
// console.log(routeMap)
// console.log(routes)
// console.log(pages)
module.exports = pages;
