const path = require('path')
const fs = require('fs');
const util = require('util')
// const func2 = require('./func2')
// const func1 = require('./func1')
// const cliProgress = require('cli-progress');
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
        // const { path } = entry;
        let html = generateHtmlPage('template.ejs', { user: "roland" }, entry.fullPath)
        html = emoji.emojify(html)
        html = minify(html, minifyOptions)

        const writeDir = (entry.path != "index.js") ?
            path.resolve(process.cwd(), 'dist', path.parse(entry.path).dir, path.parse(entry.path).name)
            : path.resolve(process.cwd(), "dist")

        console.log(writeDir)
        mkdirp(writeDir).then(dirname => {write(writeDir + "/index.html", html)})
        
        // routes.push(entry.path)
        routeCounter++
    }
    console.log(`generated ${routeCounter} pages!`.green)

}


myFunction()
