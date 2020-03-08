// return the HtmlWebpackPlugin page title and the parent of the filepath

// takes a json object of templateMap 'targets' and a filepath array and returns true if it exists
// return true if the filepath exists in templateMap.json
const checkIfPathExists = function (targets, currentPathArray) {
    // result needs to be declared here and set later 
    // because if 'return false' is at the bottom the function it will always return false
    let result = false
    targets.forEach((route) => {
        const routeLength = lengthOfRoute(route.filepath)
        const filepathLength = lengthOfRoute(currentPathArray)

        // ensure that the route and path are both strings for the following part
        const routeString = filepathToString(route.filepath)
        const filepathString = filepathToString(currentPathArray)
        if (routeLength <= filepathLength) {
            if (routeString === filepathString) {
                result = true
            }
        }
    })
    return result
}

// takes a filepath and returns it as a string
// EG: ["file", "to", "path"] OUTPUTS: "file/to/path"
const filepathToString = function (filepath) {
    // check if the given filepath is an array
    const isArray = Array.isArray(filepath)
    let result = ''

    // the filepath is an array. return it as a string
    if (isArray && filepath.length > 0) {
        result = String(filepath.reduce((acc, link) => acc + "/" + link))
    } else {
        // the filepath is already a string so just return it
        result = String(filepath)
    }
    return result
}

// takes a filepath and returns it as a string
// EG: "file/to/path" OUTPUTS: ["file", "to", "path"]
const filepathToArray = function (filepath) {
    // check if the given filepath is an array
    const isArray = Array.isArray(filepath)

    // if the filepath is a string. return it as an array
    if (!isArray) return filepath.split("/")
    // the filepath is already an array so just return it
    else return filepath
}

// takes a filepath and returns it as a route by removing [name].html from the filepath
// EG: "file/to/path/index.html" OUTPUTS: "file/to/path"
const filepathToRoute = function (filepath) {
    // check if the given filepath is an array
    const isArray = Array.isArray(filepath)
    let result = []
    if (!isArray) result = filepathToArray(filepath)
    else result = filepath

    if (result[result.length - 1].includes('.html')) {
        result = result.slice(0, result[result.length - 1])
    }

    return result
}

// takes a filepath string or array
// returns the length of a route
const lengthOfRoute = function (filepath) {
    // check if the given filepath is an array
    const isArray = Array.isArray(filepath)

    // if its an array return its length
    if (isArray) return filepath.length
    // if its not an array convert it to one and return its length
    else return filepath.split('/').length
}

const getPrevLink = function (targets, filepath) {
    
    let currentPathArray = filepath.split('/')
    // remove index.html from the filepath
    currentPathArray.splice(lengthOfRoute(currentPathArray) - 1)
    do {
        // keep removing the last element of the filepath until a matching filepath is found
        currentPathArray.splice(lengthOfRoute(currentPathArray) - 1)
    } while (!checkIfPathExists(targets, currentPathArray))
    return filepathToString(currentPathArray)
}

module.exports = (title, filepath, targetMap) => {
    const backLink = getPrevLink(targetMap, filepath)
    return (
        `<h1 class="backLink"><a class="lightHyperLink" href="/${backLink}">~ ${title}</a></h1>`
    )
}
