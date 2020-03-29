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
const colors = require('colors');
const processRoutes = require('./processRoutes');

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
		console.log('An error occurred while copying the folder.')
		return console.error(err)
	}
});

renderSass('src/styles/styles.scss', 'dist/app.css')
renderSass('src/styles/light.scss', 'dist/lightTheme.css')

// list of HTML pages
// const pages = []

// get a list of templates that each file wants to use
const routeMap = generateRouteMap()
console.log(`Got ${routeMap.length} custom template targets`)

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
}, "src/views")
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
const pages = processRoutes(routes)

if (pages.length == 0) console.log(`WARNING!!! Exported ${pages.length} HTML page templates!`.red.bold)
else console.log(`Exported ${pages.length} HTML page templates!`)
// console.log(routeMap)
// console.log(routes)
// console.log(pages)
module.exports = pages;
