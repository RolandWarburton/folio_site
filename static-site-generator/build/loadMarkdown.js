// const fetch = require('node-fetch')
// const emoji = require('node-emoji')
// const marked = require('marked')
const path = require('path')
// const fs = require('fs')
// const fp = require('./build/filepathHelper')
const readFiles = require('./readFiles');
// var util = require('util');
const { exec }  = require("child_process");
const argv = require('yargs').argv

// try this example url to fetch some content
// https://raw.githubusercontent.com/RolandWarburton/knowledge/master/programming/Web%20Components.md

// the function writes the content that it fetches to the markdown dir
// I do not know how to use promises that well and read the fetch asynchronously


// this file runs independently from the rest of the build script
// it fetches and writes content into the markdown folder for the websites pages to target
// TODO: each view needs a 404 fallback page in case a markdown file is not found or wasnt fetched

// const readFile = util.promisify(fs.readFile)
// const readDir = util.promisify(fs.readdir)
const appRootPath = path.resolve(process.cwd())
const viewsDir = path.resolve(appRootPath, "src/views")
const sourceURL = "https://github.com/RolandWarburton/knowledge"
// const repoName = (sourceURL) ? sourceURL.split("https://github.com/RolandWarburton/")[1] : 'sourceRepo'


// true if custom path is set
const pathArg = (argv.p) ? true : false

// console.log("\n\n\n")
// console.log(argv.p)
// console.log("\n\n\n")

// accepts a location to a repo to check. otherwise clone it into temp
const repoPath = (pathArg) ? argv.p : path.resolve(appRootPath, "temp")

const execCommand = function(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) console.log(error)
        if (stderr) console.log(stderr)
    })
}

if (pathArg) {
    console.log("path arg passed")
    execCommand(`cd ${repoPath} && git fetch ${repoPath} && git pull -C ${repoPath} && cd -`)
} else {
    console.log("no path arg passed")
    execCommand(`cd ${repoPath} && git clone --depth=1 --branch=master ${sourceURL} markdownContent && rm -rf .git && cd -`)
}


const routes = []
readFiles(repoPath, ({ filepath, title }) => {
    routes.push({
        filepath: filepath,
        distpath: filepath.replace(/\s/g, ''),
        title: title
    })
}, "src/views")

console.log(routes)
















// console.log(routes)
    // splice the last '/' of the URL
    // turn it into a string
    // and remove %20 (space codes)
    // const fileName = decodeURI(fp.filepathToString(fp.filepathToArray(u/rl).splice(-1, 1)))
    // const markdownDir = path.resolve(process.cwd(), 'src/markdown/')
    // const writePath = path.resolve(process.cwd(), markdownDir, fileName)


    // const myData = await read(url)
    //     .then(data => {
    //         console.log(data);
    //         return data
    //     })
    // const readfileAsync = function (url) {
    //     return new Promise(function (resolve, reject) {
    //         fetch(url)
    //             .then(res => {
    //                 res.text()
    //             })
    //             .then(body => {
    //                 console.log(body)
    //                 return body
    //             })
    //     })


    // }

    // readfileAsync("https://raw.githubusercontent.com/RolandWarburton/knowledge/master/programming/Web%20Components.md")
    // .then(function(content) {
    //     console.log(content)
    // })




// const dest = fs.createWriteStream(writePath);
// res.body.pipe(dest);