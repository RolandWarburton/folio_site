const fs = require('fs')
const listFilesInDir = require('../../../build/listFilesInDir')
// const getRoutePositionInDir = require('../../../build/getRoutePositionInDir')

// Returns an entire list of notes in the /src/views/notes dir
// takes a filepath relative to src/views/... and will return all pages in that directory
// EG: 'notes/' will return: 'notes/notes1', 'notes/notes2'
module.exports = (filepath) => {

    // get the entire map of every route
    const initData = JSON.parse(fs.readFileSync('./temp/routeMap.json'));
    let results = listFilesInDir(initData, filepath)
    
    // remove 'index' route from the if you are on the index
    // because if you are on the root path there is no need to navigate to the index
    results.forEach((route, i) => {
      if (route.filepath == 'index') results.splice(i, 1)
    }) 

    return (
    `
    <ul>
        ${results.map((route, i) => `
        <li><a class="lightHyperLink underline" href="/${route.filepath}">${route.title}</a></li>
      `.trim()).join('')}
    </ul>
    `)
}

// ${initData[0].filepath}