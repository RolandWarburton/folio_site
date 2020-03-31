const fs = require('fs-extra');
const path = require('path');
const readFiles = require('./readFiles')
const getTemplate = require('./getTemplate')
const generateRouteMap = require('./generateRouteMap')
const generateHtmlPage = require('./generateHtmlPage')
const getPrevRoute = require('./getPrevRoute')
const getRoutePositionInDir = require('./getRoutePositionInDir')
const listFilesInDir = require('./listFilesInDir')
const minify = require('html-minifier').minify;
const renderSass = require('./renderSass');
const emojified = require('node-emoji');

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

renderSass('src/styles/styles.scss', 'dist/app.css')
renderSass('src/styles/light.scss', 'dist/lightTheme.css')

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
		distpath: filepath.replace(/\s/g, ''),
		template: getTemplate(routeMap, title)
	})
})
console.log(`Got ${routes.length} routes`)

// create folders in dist for writing to later
routes.forEach(route => {
	// get the folder path we want to create
	const folderFilepath = path.resolve(appRootPath, distPath, route.distpath)
	// if it doesn't exist. recursively create the folder
	if (!fs.existsSync(folderFilepath) && route.distpath != 'index') {
		fs.mkdirSync(folderFilepath, { recursive: true });
	}
})

// write the routes to the routeMap file for later reference
fs.writeFileSync(process.cwd() + '/temp/routeMap.json', JSON.stringify(routes))

// generate HTML for every route that we picked up in src/views and stored in routes
console.log("Writing HTML")
routes.forEach((route, i) => {
	// relativeIndex gets the position the the current routes filepath. eg 0, 1 etc within its directory
	const relativeIndex = getRoutePositionInDir(routes, route.filepath)
	// get all the files in the parent of this filepath
	const filesInDir = listFilesInDir(routes, getPrevRoute(routes, route.filepath))
	// set next/prev filepath to one of the files in the parent directory of this filepath
	const next = filesInDir[relativeIndex + 1]
	const prev = filesInDir[relativeIndex - 1]

	const templateData = {
		user: 'john smith',
		title: route.title,
		filepath: route.filepath,
		backLink: getPrevRoute(routes, route.filepath),
		css: 'app.css',
		links: {prev: prev, next: next}
	}

	// if the filepath happens to be the index file then drop 'index' from the last part of its file path
	// so the url will only be www.example.com/ not www.example.com/index
	const indexAppend = (route.filepath == 'index') ? '' : 'index'
	
	// create the filepath to write the index.html file to in dist
	const writePath = (path.resolve(appRootPath, distPath, route.distpath, indexAppend) + '.html')


	// create page HTML here
	let html = generateHtmlPage(route.template, templateData, route.filepath)

	// make it small and sharp!
	html = minify(html, {
		removeAttributeQuotes: true,
		collapseWhitespace: true,
		html5: true,
		minifyCSS: true,
		removeEmptyElements: true,
		removeComments: true,
		useShortDoctype: true
	})

	// parse it through and look for emojis 👀
	html = emojified.emojify(html)

	// push the html to an array in case i need it later
	pages.push(html)
	console.log(route.filepath)

	fs.writeFileSync(writePath, html, 'utf8');
})

console.log(`Exported ${pages.length} HTML page templates!`)
// console.log(routeMap)
// console.log(routes)
// console.log(pages)
module.exports = pages;
