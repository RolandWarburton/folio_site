const filepathHelper = require('../build/filepathHelper')

module.exports = (targets, filepath) => {
    // split the filepath into an array
    // let currentPathArray = filepath.split('/')

    // remove index.html from the filepath
    filepath = filepathHelper.sanitizeHTMLfilepath(filepath)

    // return the filepath if its length is 1 (is on the root dir)
    if(filepathHelper.lengthOfRoute(filepath) == 1) return filepath

    // convert it into an array
    currentPathArray = filepathHelper.filepathToArray(filepath)

    do {
        // keep removing the last element of the filepath until a matching filepath is found
        currentPathArray.splice(filepathHelper.lengthOfRoute(currentPathArray) - 1)
    } while (!filepathHelper.checkIfPathExists(targets, currentPathArray))
    return filepathHelper.filepathToString(currentPathArray)
}