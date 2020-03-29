const fs = require('fs')
const path = require('path')
const getRoutePositionInDir = require('./getRoutePositionInDir')
const listFilesInDir = require('./listFilesInDir')
const getPrevRoute = require('./getPrevRoute')
const generateHtmlPage = require('./generateHtmlPage')
const minify = require('html-minifier').minify;
const emojified = require('node-emoji');
const util = require('util');
const https = require('https')

const write = util.promisify(fs.writeFile)

// const options = {
//     hostname: 'github.com',
//     port: 443,
//     path: '/RolandWarburton',
//     method: 'GET'
// }




module.exports = (routes) => {
    const appRootPath = path.resolve(process.cwd())

    const distPath = path.resolve(appRootPath, 'dist')
    if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath);
    }

    const pages = []


    // const req = https.request(options, res => {
    //     console.log(`statusCode: ${res.statusCode}`)

    //     res.on('data', d => {
    //         process.stdout.write(d)
    //     })
    // })

    // req.on('error', error => {
    //     console.error(error)
    // })

    // req.end()

    routes.forEach((route, i) => {
        // relativeIndex gets the position the the current routes filepath. eg 0, 1 etc within its directory
        const relativeIndex = getRoutePositionInDir(routes, route.filepath)
        // get all the files in the parent of this filepath
        const filesInDir = listFilesInDir(routes, getPrevRoute(routes, route.filepath))
        // set next/prev filepath to one of the files in the parent directory of this filepath
        const next = filesInDir[relativeIndex + 1]
        const prev = filesInDir[relativeIndex - 1]


        const templateData = {
            title: route.title,
            filepath: route.filepath,
            backLink: getPrevRoute(routes, route.filepath),
            css: 'app.css',
            links: { prev: prev, next: next }
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

        // const filepath = path.resolve(process.cwd(), 'src/markdown/bookmarks.md')
        // console.log(markdown.toString())

        // parse it through and look for emojis 👀
        html = emojified.emojify(html)

        // push the html to an array in case i need it later
        pages.push(html)

        write(writePath, html, 'utf8')
    })

    return pages;
}