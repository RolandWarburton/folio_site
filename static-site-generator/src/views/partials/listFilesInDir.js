const fs = require('fs')

// Returns an entire list of notes in the /src/views/notes dir
// takes a filepath and will return all files from that point onwards
// EG: 'notes/' will return: 'notes/notes1', 'notes/notes2'
module.exports = (path) => {

    // get the entire map of every route
    const initData = JSON.parse(fs.readFileSync('./temp/templateMap.json'));

    // filter out routes to ones that are only on the targetPath (IE. inside the directory) 
    let output = initData.map(route =>
        `
        ${route.filepath.includes(path) ?
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