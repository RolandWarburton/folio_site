const path = require('path')
const fs = require('fs');
const util = require('util')
const readdirp = require('readdirp');
const generateHtmlPage = require('./generateHtmlPage');
const emoji = require('node-emoji');
const minify = require('html-minifier').minify;
const colors = require('colors');
const mkdirp = require('mkdirp')

const write = util.promisify(fs.writeFile)

const minifyOptions = {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeEmptyElements: true,
    removeComments: true,
    useShortDoctype: true
}

const myFunction = async () => {
    const routes = []
    let routeCounter = 0
    for await (const entry of readdirp('./data')) {
        
        // wait for the generated page to be loaded in
        // html page comes back with all content injected
        let html = await generateHtmlPage('template.ejs', { user: "roland" }, entry.fullPath)
        
        // parse it for emoji
        html = emoji.emojify(html)
        
        // make it smol
        html = minify(html, minifyOptions)

        // get a filepath to the write directory
        // the directory structure should look like...
        // EG: views/notes will belong in dist/notes/index.html
        const writeDir = (entry.path != "index.js") ?
            path.resolve(process.cwd(), 'dist', path.parse(entry.path).dir, path.parse(entry.path).name)
            : path.resolve(process.cwd(), "dist")

        // make the dir with -p (recursive) and then write it to writeDir/index.html 
        mkdirp(writeDir).then(dirname => {write(writeDir + "/index.html", html)})
        
        // push it to the routes array for later
        // routes.push(entry.path)

        // keep count of the number of pages generated
        routeCounter++
    }
    console.log(`generated ${routeCounter} pages!`.green)

}


myFunction()
