const fs = require('fs')
const listFilesInDir = require('../../../build/listFilesInDir')

// Returns an entire list of notes in the /src/views/notes dir
// takes a filepath relative to src/views/... and will return all pages in that directory
// EG: 'notes/' will return: 'notes/notes1', 'notes/notes2'
module.exports = (filepath) => {

    // get the entire map of every route
    const initData = JSON.parse(fs.readFileSync('./temp/templateMap.json'));
    const results = listFilesInDir(initData, filepath)

    return (
    `
    <ul>
        ${results.map((route, i) => `
        <li><a class="darkHyperLink" href="/${route.filepath}">${route.title}</a></li>
      `.trim()).join('')}
    </ul>
    `)
}

// ${initData[0].filepath}