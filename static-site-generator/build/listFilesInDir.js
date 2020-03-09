const fp = require('./filepathHelper')
const getPrevRoute = require('./getPrevRoute')

// takes returns all page titles and filepaths in the given directory
module.exports = (targetMap, filepath) => {
    filepath = fp.sanitizeHTMLfilepath(filepath)
    const result = []
    targetMap.forEach((route) => {
        if (fp.lengthOfRoute(route.filepath) > fp.lengthOfRoute(filepath)) {
            if (getPrevRoute(targetMap, route.filepath) == filepath) {
                result.push(route)
            }
        }
    })
    return result
}