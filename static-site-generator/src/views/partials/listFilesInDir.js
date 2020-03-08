const fs = require('fs')

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

// Returns an entire list of notes in the /src/views/notes dir
// takes a filepath and will return all files from that point onwards
// EG: 'notes/' will return: 'notes/notes1', 'notes/notes2'
module.exports = (path) => {

    // get the entire map of every route
    const initData = JSON.parse(fs.readFileSync('./temp/templateMap.json'));

    // filter out routes to ones that are only on the targetPath (IE. inside the directory) 
    let output = initData.map(route =>
        `
        ${(route.filepath.includes(path) && lengthOfRoute(route.filepath) == lengthOfRoute(path)) ?
        `
            <ul>
                <li>
                    <a class="darkHyperLink" href="/${route.filepath}">
                        ${route.title}
                    </a>
                </li>` : ''}
            </ul>
        `
    ).join("");

    return (
        `
        ${output}`
    )
}