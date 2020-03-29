const fs = require('fs')
const path = require('path')

// Takes a function called processFiles to pass each file back to its caller 
// returns the filepath and title of a file without their extension
// filepath should be the full filepath. or at least from 'src/views/filename.js'
function readFile(filepath, processFiles, relativeDir = "src/views") {
    // strip the .js from the filepath
    const filepathStripped = path.parse(filepath).name
    // get the filepath relative to the 'relativeDir'
    let relFilePath = path.relative(relativeDir, filepath).split('.')[0]
    console.log(relFilePath)
    processFiles({
        // return the filepath without an extension
        filepath: relFilePath,
        // return the file of the filepath without an extension
        title: filepathStripped
    })
}


module.exports = readFile;