const fs = require('fs')
const getPrevRoute = require('../../../build/getPrevRoute')

// return the HtmlWebpackPlugin page title and the parent of the filepath
module.exports = (title, filepath) => {
    const routeMap = JSON.parse(fs.readFileSync('../../../temp/routeMap.json'))
    let backLink = getPrevRoute(routeMap, filepath)
    if (backLink == '') backLink = '/'
    else backLink = '/' + backLink

    // personal preference to not render the index pages title
    if (title == 'index') title = ''

    // backlink will render as a clickable link if it isnt on root (ie backlink != '' as returned by getPrevRoute)
    return (
        `
        ${(filepath != 'index.html') ? 
            `<h1 class="backLink"><a class="lightHyperLink" href="${backLink}">~ ${title}</a></h1>` : 
            `<h1 class="backLink">${title}</h1>`}
        `
    )
}
