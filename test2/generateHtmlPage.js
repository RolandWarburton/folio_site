const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const generateHtmlpage = function (templatePath, templateData, filepath) {
    // get the templateFile for this route
    const templateFile = fs.readFileSync(path.resolve(process.cwd(), templatePath), 'utf-8')
    
    // get the page content from the js file by requiring the module
    templateData.content = require(filepath, filepath)
    
    const html = ejs.render(templateFile, templateData)
    return(html)
}

module.exports = generateHtmlpage