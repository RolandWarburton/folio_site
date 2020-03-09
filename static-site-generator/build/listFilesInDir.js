const fs = require('fs')
const path = require('path')
const filepathHelper = require('./filepathHelper')
const readFiles = require('./readFiles')
// takes returns all page titles and filepaths in the given directory
module.exports = (filepath) => {
    const result = []
    readFiles(path.resolve(process.cwd(), 'src/views', filepath), ({ filepath, title }) => {
        result.push({
            title: title,
            filepath: filepath
        })
    }, false)
    return result
}