const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const generateHtmlpage = function (templatePath, templateData, filepath) {
    // get the templateFile for this route
    const templateFile = fs.readFileSync(path.resolve(process.cwd(), templatePath), 'utf-8')

    // get the pagecontent from the js file and append it to the templateData
    const pageContent = fs.readFileSync(path.resolve(process.cwd(), 'src/views', filepath) + '.js', 'utf-8')
    templateData.content = pageContent
    templateData.contentPath = require(path.resolve(process.cwd(), 'src/views', filepath) + '.js')

    const html = ejs.render(templateFile, templateData)
    return(html)
}

module.exports = generateHtmlpage