const getPrevRoute = require('../../../build/getPrevRoute')

// return the HtmlWebpackPlugin page title and the parent of the filepath
module.exports = (title, filepath, routeMap) => {
    let backLink = getPrevRoute(routeMap, filepath)

    // backlink will render as a clickable link if it isnt on root (ie backlink != '' as returned by getPrevRoute)
    return (
        `
        ${(backLink) ? 
            `<h1 class="backLink"><a class="lightHyperLink" href="${backLink}">~ ${title}</a></h1>` : 
            `<h1 class="backLink">${title}</h1>`}
        `
    )
}
