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

fs.copy(path.resolve(appRootPath, 'src/media'), path.resolve(appRootPath, 'dist/media'), function (err) {
	if (err) {
		console.log('An error occured while copying the folder.')
		return console.error(err)
	}
	console.log('Copied media to dist')
});

sass.render({
	file: path.resolve(appRootPath, 'src/styles/styles.scss'),
	outFile: path.resolve(appRootPath, 'dist/app.css'),
	outputStyle: 'compressed'
}, function (error, result) {
	if (!error) {
		fs.writeFile(path.resolve(appRootPath, 'dist/app.css'), result.css, function (err) {
			if (!err) {console.log('Copied styles to dist')}
		});
	}
});

// list of HtmlWebpackPlugin pages for building 
const pages = []

// get a list of templates that each file wants to use
const routeMap = generateRouteMap()
console.log(`Read in ${routeMap.length} custom template targets`)

// generate the list of routes
const routes = []
readFiles(viewsDir, ({ filepath, title }) => {
	// push the route to an array to be used later
	routes.push({
		title: title,
		filepath: filepath,
		template: getTemplate(routeMap, title)
	})
	// greate a folder in dist for writing to later
	// get the folder path we want to create
	const folderFilepath = path.resolve(appRootPath, distPath, filepath)
	// if it doesnt exist. recursively create the folder
	if (!fs.existsSync(folderFilepath) && filepath != 'index') {
		fs.mkdirSync(folderFilepath, { recursive: true });
	}
})
console.log(`Got ${routes.length} routes`)

// write the routes to the routeMap file for later reference
fs.writeFileSync(process.cwd() + '/temp/routeMap.json', JSON.stringify(routes))

routes.forEach((route, i) => {
	// const templateData = { user: 'john smith' }
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

	// get the exact filepath to write to
	// EG: .../dist/notes/notes.html for the URL www.example.com/notes
	const writePath = path.resolve(appRootPath, distPath, route.filepath, indexAppend) + '.html'

	const html = generateHtmlPage(route.template, templateData, route.filepath)
	pages.push(html)
	fs.writeFileSync(writePath, html, 'utf8');
	// console.log(pages[i])
})

console.log(`Exported ${pages.length} HTML page templates!`)
// console.log(routeMap)
// console.log(routes)
// console.log(pages)
module.exports = pages;
