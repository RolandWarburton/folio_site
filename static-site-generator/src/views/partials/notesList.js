const fs = require('fs')
module.exports = (args) => {

    // get the entire map of every route
    const initData = JSON.parse(fs.readFileSync('./temp/templateMap.json'));

    // filter out routes to ones that are only on the targetPath (IE. inside the directory) 
    let output = initData.map(route =>
        `
        ${route.filepath.includes('notes/') ?
        `
            <li>
                <a class="darkHyperLink" href="/${route.filepath}">
                    ${route.filepath.includes('notes') ? route.title : ''}
                </a>
            </li>` : ''}
        `
    ).join("");

    return (
        `
        <h1>notes list partial:</h1>
        ${output}`
    )
}