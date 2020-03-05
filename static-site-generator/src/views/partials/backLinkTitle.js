// return the HtmlWebpackPlugin page title and the parent of the filepath
module.exports = (title, filepath) => {
    const filepathArray = filepath.split('/')
    const backlink = filepathArray.slice(0, filepathArray.length-2)
    return (
        `<h1 class="backLink"><a class="lightHyperLink" href="/${backlink}">~ ${title}</a></h1>`
    )
}
